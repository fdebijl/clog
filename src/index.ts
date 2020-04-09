import moment from 'moment';
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
      this.log(`Picked up minimal log level ${this.minLogLevel} from environment variable.`, LOGLEVEL.DEBUG);
      return;
    }

    this.minLogLevel = LOGLEVEL.INFO;
  }

  public log(message: string | object, level: LOGLEVEL = 1): void {
    if (level === LOGLEVEL.OFF) {
      return;
    }

    if (level >= this.minLogLevel) {
      message = typeof(message) === 'object' ? JSON.stringify(message, null, 4) : message;
      console.log(`${moment().format('DD/MM/Y HH:mm:ss')} [${LOGLEVEL[level]}] - ${message}`);
    }
  };
}
