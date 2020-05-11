import DouyuLogin from '../../douyu/DouyuLogin'
import * as Websocket from 'ws'
import * as md5 from 'md5'
import requests from '../../agent'
import BufferCoder from './BufferCoder'
import * as util from 'util'
import log4js from '../../logger'
const cryptoSync = require("../../jslib/cryptoSync")

const headerUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'


export default class GetProxy {

  private static bufferCoder: BufferCoder = new BufferCoder();
  private logger = log4js.getLogger("GetProxy")
  private roomId!: string | number;
  private proxyws?: Websocket;
  private douyu: DouyuLogin;
  private cookies?: Array<any>;
  private kd_pre?: string;
  private dmva?: string;

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
          if (str.type === 'loginres') {
            this.proxyws?.send(
              GetProxy.bufferCoder.encode(util.format('type@=h5ckreq/rid@=%s/ti@=220120191120/', this.roomId))
            );
            this.proxyws?.send(
              GetProxy.bufferCoder.encode(util.format('type@=keeplive/vbw@=0/cdn@=/tick@=%s/kd@=%s/', this.getTime(), ""))
            )
            this.sendHeartbeant();

            this.dmva = str.dmva;
          } else if (str.type === 'keeplive') {
            this.kd_pre = str.kd as string
            this.logger.info(" kd_pre = %s ", this.kd_pre);
            this.sendBarrage("6666~ "+this.getTime())
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
        GetProxy.bufferCoder.encode(util.format('type@=keeplive/vbw@=0/cdn@=/tick@=%s/kd@=%s/', this.getTime(), this.get_kd(this.kd_pre!)))
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


  private get_kd = (kd_pre: string) => {
    let v: any = this.hex2bin(kd_pre)
    let rs = 32
    let did = '11111111111111111111111111111111'

    let k = [0x174d4dc8, 0xfb8b26a6, 0x7b5a767d, 0x3b251e1f];
    for (let I = 0; I < v.length; I += 2) {
      let i, v0: any = v[I],
        v1: any = v[I + 1],
        delta = 0x9E3779B9,
        sum = delta * rs;
      v0 += 0x6bec8b74;
      v0 += 0xcce4ab9;
      v1 -= 0x60dd744b;
      v1 -= 0x4f105ed9;
      for (i = 0; i < rs; i++) {
        v1 -= (((v0 << 4) ^ (v0 >>> 5)) + v0) ^ (sum + k[(sum >>> 11) & 3]);
        sum -= delta;
        v0 -= (((v1 << 4) ^ (v1 >>> 5)) + v1) ^ (sum + k[sum & 3]);
      }
      v0 -= 0xa2b59350;
      v0 -= 0xbe7635a2;
      v1 += 0xa30dde55;
      v1 += 0xa2b59350;
      v[I] = v0;
      v[I + 1] = v1;
    }
  }

  private hex2bin = (e: string) => {
    if ("string" === typeof e && e.length % 8 === 0) {
      let r = []
      let n = []
      for (let t = e.length, o = 0; o < t;)
        r.push(e.substr(o, 2)),
          o += 2;
      for (let i = r.length, s = 0; s < i;)
        n.push(parseInt(r.slice(s, s + 4).reverse().join(""), 16)),
          s += 4;
      return n
    }
    return null
  }

  public sendBarrage = (content: string) => {
    let time = this.getTime();
    let dmvv = cryptoSync('_sub_dms', [this.roomId, time, this.dmva]);
    this.proxyws?.send(
      GetProxy.bufferCoder.encode(util.format(
        'content@=%s/col@=0/type@=chatmessage/dy@=%s/sender@=%s/ifs@=0/nc@=0/dat@=0/rev@=0/admzq@=0/cst@=%s/dmt@=7/dmvv@=%s/',
        content, '11111111111111111111111111111111', this.cookies?.filter(cookie => cookie.name === 'acf_username')[0].value, time, dmvv))
    )
  }
}
