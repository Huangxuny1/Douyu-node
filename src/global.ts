import * as log4js from 'log4js';
import * as superagent from 'superagent';
import { DouyuLogin } from './douyu/login'

log4js.configure({
  appenders: {
    consoleout: {
      type: 'console', layout: {
        type: "colored"
      }
    },
    fileout: {
      type: 'file',
      filename: 'app.log'
    },
  },
  categories: {
    default: { appenders: ['consoleout', 'fileout'], level: 'debug' },
  }
});

const requests = superagent.agent();

const douyu = new DouyuLogin()

export { log4js, requests, douyu };
