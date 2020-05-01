import * as Koa from 'koa';
import * as Router from 'koa-router'
import * as bodyParser from 'koa-body';
import * as Socket from 'socket.io'
import log4js from './logger'
import * as HttpRequests from './http'
import singleReceiveMsgTypes from './websocket/msgtype/singleReceiveMsgTypes';


export default class Server {
    private logger = log4js.getLogger("server");

    public start = () => {
        const app = new Koa();
        const router = new Router();

        this.addRouter(router)
        
        app.use(bodyParser({multipart:true}))
        app.use(router.routes());

        const io = Socket(
            app.listen(30001,()=>{
                this.logger.info("server listen on port 30001")
            })
        )

        io.on("connection",socket=>{
            this.logger.info("new connection")
            new SocketUtil(socket).subscribeEvents();
        })
    }

    private addRouter = (router:Router)=>{
        router.get("/hello",HttpRequests.getHello)
    }
}

class SocketUtil {
    // receive a message, do the specific function
    private singleReceiveMsgFnMap: Map<singleReceiveMsgTypes, (...args: any[]) => void>;
    private socket: Socket.Socket;
    private logger = log4js.getLogger('SocketUtil');
  
    public constructor(socket: Socket.Socket) {
      this.socket = socket;
      // if you want to handle a new type of message from the client
      // you can add your solution below
      this.singleReceiveMsgFnMap = new Map<singleReceiveMsgTypes, (...args: any[]) => void>([
        [
          'add_room',
          async (roomId: string) => {
            this.logger.info(" get room id {0}",roomId)
          }
        ],
      ]);
    }
  
    public subscribeEvents = () => {
      for (const [msg, fn] of this.singleReceiveMsgFnMap) {
        this.socket.on(msg, fn);
      }
    };
  }