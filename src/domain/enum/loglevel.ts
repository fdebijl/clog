export enum LOGLEVEL {
  /** Designates fine-grained informational events that are most useful to debug an application. */
  DEBUG,
  /** Designates informational messages that highlight the progress of the application at coarse-grained level. */
  INFO,
  /** Designates potentially harmful situations. */
  WARN,
  /** Designates error events that might still allow the application to continue running. */
  ERROR,
  /** Designates very severe error events that will presumably lead the application to abort. */
  FATAL,
  /** The highest possible rank and is intended to turn off logging. */
  OFF
}
