import fs from 'fs/promises';

import { LOGLEVEL } from './domain';
export * from './domain';

export class Clog {
  private minLogLevel: LOGLEVEL;
  private writeToFile: boolean;

  public logFileName: string;
  public maxLogFileLines = 5000;

  constructor(minLogLevel?: LOGLEVEL, writeToFile = false, logFileName = 'clog.log') {
    this.writeToFile = writeToFile;
    this.logFileName = logFileName;

    if (typeof(minLogLevel) === 'number') {
      this.minLogLevel = minLogLevel;
      process.env.LOGLEVEL = `${minLogLevel}`;
      this.log(`Set minimal log level to ${minLogLevel}`, LOGLEVEL.DEBUG);
      return;
    }

    if (process.env.LOGLEVEL) {
      this.minLogLevel = Number.parseInt(process.env.LOGLEVEL);

      if (process.env.CLOG_ANNOUNCED === '0') {
        this.log(`Picked up minimal log level ${this.minLogLevel} from environment variable.`, LOGLEVEL.DEBUG);
        process.env.CLOG_ANNOUNCED = '1';
      }
      return;
    }

    this.minLogLevel = LOGLEVEL.INFO;
  }

  public log(message: unknown, level: LOGLEVEL = 1): void {
    if (level === LOGLEVEL.OFF) {
      return;
    }

    if (level >= this.minLogLevel) {
      if (typeof(message) === 'object') {
        message = JSON.stringify(message, null, 4);
      }

      const loglevel = this.leftPad(LOGLEVEL[level], 7, ' ');
      this.printLine(`${this.getNow('DD/MM/Y HH:mm:ss')} [${loglevel}] - ${message}`);
    }
  }

  private leftPad(input: string, length: number, filler: string): string {
    while (input.length < length) {
      input = filler + input;
    }

    return input;
  }

  private getNow(format: string): string {
    const now = new Date();

    const dd = this.leftPad(`${now.getDate()}`, 2, '0');
    const mm = this.leftPad(`${now.getMonth() + 1}`, 2, '0');
    const yyyy = this.leftPad(`${now.getFullYear()}`, 2, '0');

    const h = this.leftPad(`${now.getHours()}`, 2, '0');
    const m = this.leftPad(`${now.getMinutes()}`, 2, '0');
    const s = this.leftPad(`${now.getSeconds()}`, 2, '0');

    return format
      .replace(/DD/g, dd)
      .replace(/MM/g, mm)
      .replace(/Y/g, yyyy)
      .replace(/HH/g, h)
      .replace(/mm/g, m)
      .replace(/ss/g, s)
  }

  /**
   * Prints a line to the console and writes it to the log file, if file logging is enabled
   */
  private printLine(message: string): void {
    console.log(message);

    if (this.writeToFile) {
      this.writeLine(message);
    }
  }

  /**
   * Writes a line to the log file, if the number of lines exceeds the maximum, lines will be removed from the top
   */
  private async writeLine(message: string): Promise<void> {
    await this.assertLogFile();

    const content = await fs.readFile(this.logFileName, 'utf-8')
    const lines = content.split('\n');

    if (lines.length > this.maxLogFileLines) {
      lines.shift();
    }

    lines.push(message);

    await fs.writeFile(this.logFileName, lines.join('\n'));
  }

  /**
   * Assert that the target log file exists
   */
  private async assertLogFile(): Promise<void> {
    try {
      await fs.access(this.logFileName);
    } catch (error) {
      await fs.writeFile(this.logFileName, '');
    }
  }
}
