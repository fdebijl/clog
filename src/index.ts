import { LOGLEVEL } from './domain/enum/loglevel';

export * from './domain/enum/loglevel';

export class Clog {
  private minLogLevel: LOGLEVEL;

  constructor(minLogLevel?: LOGLEVEL) {
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
      console.log(`${this.getNow('DD/MM/Y HH:mm:ss')} [${loglevel}] - ${message}`);
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
}
