import { log4js } from './global';

const logger = log4js.getLogger('index');

logger.info('info');
logger.error('error');
logger.debug('debug!');
logger.trace('trace');
