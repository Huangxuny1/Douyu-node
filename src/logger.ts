import * as log4js from 'log4js';

log4js.configure({
  appenders: {
    consoleout: { type: 'console' }
  },
  categories: {
    default: { appenders: ['consoleout'], level: 'info' }
  }
});

export default log4js;
