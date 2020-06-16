import { log4js } from './global';

const logger = log4js.getLogger('index');

// logger.info('info');
// logger.error('error');
// logger.debug('debug!');
// logger.trace('trace');
import { DouyuLogin } from './douyu/login'


let douyu = new DouyuLogin();
(
    async () => {
        await douyu.login();
        let a = await douyu.whoami();
        logger.debug(a);
    }
)()
