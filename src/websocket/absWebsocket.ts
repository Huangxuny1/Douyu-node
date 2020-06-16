import * as Websocket from 'ws';
import BufferCoder from "../serializer/BufferCoder"
import { log4js } from "../global"

interface IDouyuWebsocket {
    ws: WebSocket;
    heartbeat: any;
}

abstract class AbsDouyuWebsocket {
    private logger = log4js.getLogger('AbsDouyuWebsocket');


    public constructor() {
        // todo constuctor
    }

    public addRoom = async (roomid: string | number): Promise<void> => {
        const dyws = new Websocket('wss://danmuproxy.douyu.com:8506/');
        
    }
}