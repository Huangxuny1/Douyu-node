import * as log4js from 'log4js';
import * as superagent from 'superagent';
import { DouyuLogin } from './douyu/login'

log4js.configure({
  appenders: {
    consoleout: { type: 'console' }
  },
  categories: {
    default: { appenders: ['consoleout'], level: 'debug' }
  }
});

const requests = superagent.agent();

const douyu = new DouyuLogin()

export { log4js, requests, douyu };
