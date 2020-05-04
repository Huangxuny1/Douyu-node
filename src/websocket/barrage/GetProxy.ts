import DouyuLogin from '../../douyu/DouyuLogin'
import * as Websocket from 'ws'
import * as md5 from 'md5'
import requests from '../../agent'
import BufferCoder from './BufferCoder'
import * as util from 'util'
import log4js from '../../logger'


const headerUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'


export default class GetProxy {

  private static bufferCoder: BufferCoder = new BufferCoder();
  private logger = log4js.getLogger("GetProxy")
  private roomId!: string | number;
  private proxyws?: Websocket;
  private douyu: DouyuLogin;
  private cookies?: Array<any>;

  private wss: Array<any> = [];



  public constructor(roomId: string | number) {
    this.roomId = roomId;
    this.douyu = new DouyuLogin();
  }

  public initWSS = () => {
    this.fetchProxy().then(res => {
      let server: any = this.wss[Math.floor(Math.random() * this.wss.length)]
      this.proxyws = new Websocket("wss://" + server.domain + ":" + server.port);
      this.proxyws.onopen = () => {
        this.proxyws?.send(
          GetProxy.bufferCoder.encode(this.getLoginReq())

        );
      }

      this.proxyws.onmessage = (ev: Websocket.MessageEvent) => {
        const buf: Buffer = ev.data as Buffer;
        GetProxy.bufferCoder.decode(ev.data as Buffer, (str: any) => {
          this.logger.warn(str)
          if (str.type === 'online_task_notify') {
            this.logger.warn(" mathch ");
            this.proxyws?.send(
              GetProxy.bufferCoder.encode(util.format('type@=h5ckreq/rid@=%s/ti@=220120191120/', this.roomId))
            );
            this.sendHeartbeant()
          }
        });
      }

      this.proxyws.onerror = (ev: Websocket.ErrorEvent) => {
        this.logger.warn("error event " + ev)
      }

      this.proxyws.onclose = (ev: Websocket.CloseEvent) => {
        this.logger.warn(" close event " + ev)
      }

    }).catch(err => {
      console.log(err)
    })
  }

  private fetchProxy = async () => {
    this.cookies = await this.douyu.doLogin();


    return requests.post("https://www.douyu.com/lapi/live/gateway/web/" + this.roomId + "?isH5=1")
      .set('User-Agent', headerUserAgent)
      .set('accept', 'application/json, text/plain, */*')
      .set('x-requested-with', 'XMLHttpRequest')
      .set('sec-fetch-site', 'same-origin')
      .set('referer', 'https://www.douyu.com/' + this.roomId)
      .then(res => {
        let servers: Array<any> = JSON.parse(res.text).data.wss as Array<any>
        servers.forEach((element: any) => {
          this.wss?.push(element)
        });
      }).catch(err => {
        console.log(err)
      })
  }

  private sendHeartbeant = () => {
    setInterval(() => {
      this.logger.warn("  send heart beat ")
      this.proxyws?.send(
        GetProxy.bufferCoder.encode(util.format('type@=keeplive/vbw@=0/cdn@=/tick@=%s/kd@=%s/', this.getTime(), ""))
      );
    }, 45000)

  };

  private getLoginReq = () => {
    let timestamp = this.getTime()
    let did = '11111111111111111111111111111111'
    let vk = md5(timestamp + "r5*^5;}2#${XF[h+;'./.Q'1;,-]f'p[" + did)
    return util.format('type@=loginreq/roomid@=%s/dfl@=sn@AA=107@ASss@AA=1@Ssn@AA=108@ASss@AA=1@Ssn@AA=105@ASss@AA=1@Ssn@AA=110@ASss@AA=1/username@=%s/password@=/ltkid@=%s/biz@=%s/stk@=%s/devid@=%s/ct@=%s/pt@=2/cvr@=0/tvr@=7/apd@=/rt@=%s/vk@=%s/ver@=20190610/aver@=218101901/dmbt@=chrome/dmbv@=81',
      this.roomId,
      this.cookies?.filter(cookie => cookie.name === 'acf_username')[0].value,
      this.cookies?.filter(cookie => cookie.name === 'acf_ltkid')[0].value,
      this.cookies?.filter(cookie => cookie.name === 'acf_biz')[0].value,
      this.cookies?.filter(cookie => cookie.name === 'acf_stk')[0].value,
      did,
      this.cookies?.filter(cookie => cookie.name === 'acf_ct')[0].value,
      timestamp,
      vk
    )
  }

  private getTime = () => {
    return parseInt((new Date().getTime() / 1e3).toString(), 10);
  }

}

