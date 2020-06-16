import * as log4js from 'log4js';
import * as superagent from 'superagent';

log4js.configure({
  appenders: {
    consoleout: { type: 'console' }
  },
  categories: {
    default: { appenders: ['consoleout'], level: 'debug' }
  }
});

const requests = superagent.agent();

export { log4js, requests };
