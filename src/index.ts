import { log4js } from './global';

const logger = log4js.getLogger('index');

// logger.info('info');
// logger.error('error');
// logger.debug('debug!');
// logger.trace('trace');
import { DouyuLogin } from './douyu/login'
import Barrage from './websocket/BarrageFetcher'


let douyu = new DouyuLogin();
(
    async () => {
        // logger.info(await douyu.login());
        // logger.debug(await douyu.whoami());
        let b = new Barrage('wss://danmuproxy.douyu.com:8506/', 110);
        await b.connect()
        await b.onopen()
        b.onmessage((obj) => {
            if (obj.type == 'chatmsg') {
                logger.info('[%s] - %s(lv:%s)[%s:%s]:\t%s', obj.rid, obj.nn, obj.level, obj.bnn, obj.bl, obj.txt);
            }
        });


        let a = new Barrage('wss://danmuproxy.douyu.com:8506/', 52876);
        await a.connect()
        await a.onopen()
        a.onmessage((obj) => {
            if (obj.type == 'chatmsg') {
                logger.info('[%s] - %s(lv:%s)[%s:%s]:\t%s', obj.rid, obj.nn, obj.level, obj.bnn, obj.bl, obj.txt);
            }
        });
    }
)()
