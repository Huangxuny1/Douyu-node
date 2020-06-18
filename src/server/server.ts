import { log4js } from '../global';
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-body';
import * as routers from './routers'
import log from './middleware/accesslog'


const logger = log4js.getLogger("Server")

export default class Server {
    public start = () => {
        const app = new Koa();
        const router = new Router();
        this.addRouter(router);
        app.use(log(logger))
        app.use(bodyParser({ multipart: true }));
        app.use(router.routes());
    
        app.listen(30001, () => {
            logger.info("listening on :30001 ")
        })
    }


    private addRouter = (router: Router) => {
        router.get('/hello', routers.hello);
    };
}