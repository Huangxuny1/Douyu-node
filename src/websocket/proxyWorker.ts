import absWebsocket from './absWebsocket'
import md5 from 'md5'
const cryptoSync = require("../jslib/cryptoSync")
import * as util from 'util'
import { log4js } from '../global'
import { DouyuCookie } from '../douyu/login';

const logger = log4js.getLogger("proxy worker ")
export default class ProxyWorker extends absWebsocket {
    private roomid!: string | number;
    private cookies!: any;
    private kd_pre?: string;
    private dmva?: string;
    private heartbeatInterval!: NodeJS.Timeout;
    private msgrepeaterproxylist!: Array<any>;

    constructor(url: string, roomid: string | number, cookies: DouyuCookie) {
        super(url)
        this.roomid = roomid;
        this.cookies = cookies;
    }

    public sendBarrage = (content: string) => {
        let time = this.getTime();
        let dmvv = cryptoSync('_sub_dms', [this.roomid, time, this.dmva]);
        this.send(util.format('content@=%s/col@=0/type@=chatmessage/dy@=%s/sender@=%s/ifs@=0/nc@=0/dat@=0/rev@=0/admzq@=0/cst@=%s/dmt@=7/dmvv@=%s/',
            content, '11111111111111111111111111111111', this.cookies['acf_username'], time, dmvv));
    }

    public getMsgrepeaterproxylist = async (): Promise<Array<any>> => {

        while (this.msgrepeaterproxylist === undefined) {
            await new Promise(resolve => {
                setTimeout(resolve, 500)
            })
        }
        return this.msgrepeaterproxylist;
    }

    protected async login(/*msgHandler: (obj: any) => void*/): Promise<void> {
        await this.send(this.loginReq())
        this.onmessage(obj => {
            switch (obj.type as string) {
                case 'loginres':
                    this.send(util.format('type@=h5ckreq/rid@=%s/ti@=220120191120/', this.roomid));
                    this.dmva = obj.dmva;
                    this.heartbeat(45000, ' roomid: ' + this.roomid).then(t => this.heartbeatInterval = t)
                    break;
                case 'keeplive':
                    this.kd_pre = obj.kd as string
                    logger.warn(" kd_pre = %s ", this.kd_pre);
                    break;
                case 'error':
                    logger.error(obj);
                    this.closeConnection();
                    break;
                case 'msgrepeaterproxylist':
                    this.msgrepeaterproxylist = obj.list;
                    break;
                default:
                    this.getMsgHandler(obj);
            }

        })
    }

    protected heartbeatContent = (): string | object => {
        return util.format('type@=keeplive/vbw@=0/cdn@=/tick@=%s/kd@=%s/', this.getTime(), this.kd_pre === undefined ? '' : this.get_kd(this.kd_pre!));
    }

    protected closeHandler = async (): Promise<void> => {
        if (this.heartbeatInterval !== undefined) {
            clearInterval(this.heartbeatInterval);
        }
    }

    private loginReq = () => {
        // 当前时间戳
        let timestamp = this.getTime();
        // device id   , 32位md5 
        let did = '11111111111111111111111111111111';
        // vk 算法固定
        let vk = md5(timestamp + "r5*^5;}2#${XF[h+;'./.Q'1;,-]f'p[" + did);
        return util.format('type@=loginreq/roomid@=%s/dfl@=sn@AA=107@ASss@AA=1@Ssn@AA=108@ASss@AA=1@Ssn@AA=105@ASss@AA=1@Ssn@AA=110@ASss@AA=1/username@=%s/password@=/ltkid@=%s/biz@=%s/stk@=%s/devid@=%s/ct@=%s/pt@=2/cvr@=0/tvr@=7/apd@=/rt@=%s/vk@=%s/ver@=20190610/aver@=218101901/dmbt@=chrome/dmbv@=81',
            this.roomid,
            this.cookies['acf_username'],
            this.cookies['acf_ltkid'],
            this.cookies['acf_biz'],
            this.cookies['acf_stk'],
            did,
            this.cookies['acf_ct'],
            timestamp,
            vk
        );
    }

    private getTime = () => {
        return parseInt((new Date().getTime() / 1e3).toString(), 10);
    }

    private get_kd = (kd_pre: string) => {
        let v: any = this.hex2bin(kd_pre);
        let rs = 32;
        let did = '11111111111111111111111111111111';

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
        return this.hex(v);
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
            return n;
        }
        return null;
    }

    private hex = (v: Array<number>): string => {
        let r = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
        let t = ''
        for (let e of v) {
            for (let i = 0; i < 4; i++) {
                t += r[e >> 8 * i + 4 & 15] + r[e >> 8 * i & 15];
            }
        }
        return t;
    }
}
