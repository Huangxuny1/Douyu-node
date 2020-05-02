import * as Websocket from 'ws';
import BufferCoder from './BufferCoder';
import log4js from '../../logger';

interface WSUtil {
  ws: WebSocket;
  heartbeatInterval: any;
}

class GetBarrage {
  private static bufferCoder: BufferCoder = new BufferCoder();

  private logger = log4js.getLogger('GetBarrage');

  public addRoom = (roomId: string | number) => {
    const dyws = new Websocket('wss://danmuproxy.douyu.com:8506/');

    dyws.onopen = () => {
      this.logger.info(`room ${roomId} start crawling successfully`);
      this.login(dyws, roomId);
    };

    dyws.onmessage = async (ev: Websocket.MessageEvent) => {
      const buf: Buffer = ev.data as Buffer;
      GetBarrage.bufferCoder.decode(ev.data as Buffer, this.barrageCallback);
    };
  };

  private barrageCallback = (str: string) => {
    this.logger.info(' receive message ' + str);
  };

  private login = (dyws: Websocket, roomId: string | number) => {
    dyws.send(
      GetBarrage.bufferCoder.encode(
        `type@=loginreq/room_id@=${roomId}/dfl@=sn@A=105@Sss@A=1/username@=61609154/uid@=61609154/ver@=20190610/aver@=218101901/ct@=0/`
      )
    );
    dyws.send(GetBarrage.bufferCoder.encode(`type@=joingroup/rid@=${roomId}/gid@=-9999/`));
    return this.sendHeartbeant(dyws);
  };

  private sendHeartbeant = (dyws: Websocket) => {
    return setInterval(() => {
      this.logger.warn('send heartbeat ~');
      dyws.send(GetBarrage.bufferCoder.encode('type@=mrkl/'));
    }, 45000);
  };
}

export default new GetBarrage();
