import DouyuLogin from '../../douyu/DouyuLogin'
import * as Websocket from 'ws'
import * as md5 from 'md5'
import * as util from 'util'
import requests from '../../agent'
import BufferCoder from './BufferCoder'


const headerUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'


export default class GetProxy {

    private static bufferCoder: BufferCoder = new BufferCoder();

    private roomId!: string | number;
    private proxyws?: Websocket;
    private douyu: DouyuLogin;
    private cookies?: Array<any>;

    private wss: Array<any> = [];

    constructor(roomId: string | number) {
        this.roomId = roomId;
        this.douyu = new DouyuLogin();
    }

    private fetchProxy = async () => {
        this.cookies = await this.douyu.doLogin();
        let payload = this.calSign(this.roomId, '21345d59b2a2deb28f236b3c11192501', this.getTime());
        return new Promise((resolve, reject) => {
            requests.post("https://www.douyu.com/lapi/live/gateway/web/" + this.roomId + "?isH5=1")
                .set('User-Agent', headerUserAgent)
                .set('accept', 'application/json, text/plain, */*')
                .set('x-requested-with', 'XMLHttpRequest')
                .set('sec-fetch-site', 'same-origin')
                .set('referer', 'https://www.douyu.com/' + this.roomId)
                .send(payload)
                .then(res => {
                    let servers: Array<any> = JSON.parse(res.text).data.wss as Array<any>

                    servers.forEach((element: any) => {
                        this.wss?.push(element)
                    });
                }).catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }

    public initWSS = () => {
        this.fetchProxy().then(res => {
            let server: any = Math.floor(Math.random() * this.wss.length)
            this.proxyws = new Websocket("wss://" + server.domain + ":" + server.port);
            this.proxyws.onopen = async () => {
                this.proxyws?.send(
                    GetProxy.bufferCoder.encode(""/* todo */)
                );
            }

            this.proxyws.onmessage = async (ev: Websocket.MessageEvent) => {
                const buf: Buffer = ev.data as Buffer;
                GetProxy.bufferCoder.decode(ev.data as Buffer, (str: string) => {
                    console.log(str)
                });
            }
        });
    }





    private calSign = (roomId: string | number, solt: string, tt: number) => {
        let cb = roomId + solt + tt + "220120200217";
        let rb = md5(cb).toString();
        let re: any = [];
        for (let i = 0; i < rb.length / 8; i++)
            re[i] =
                (parseInt(rb.substr(i * 8, 2), 16) & 0xff) |
                ((parseInt(rb.substr(i * 8 + 2, 2), 16) << 8) & 0xff00) |
                ((parseInt(rb.substr(i * 8 + 4, 2), 16) << 24) >>> 8) |
                (parseInt(rb.substr(i * 8 + 6, 2), 16) << 24);
        let k2 = [0x7c2717b7, 0x1f83b724, 0x471c00, 0x64957544];
        for (let I = 0; I < 2; I++) {
            let v0: any = re[I * 2],
                v1: any = re[I * 2 + 1],
                sum = 0,
                i = 0;
            let delta = 0x9e3779b9;
            for (i = 0; i < 32; i++) {
                sum += delta;
                v0 += ((v1 << 4) + k2[0]) ^ (v1 + sum) ^ ((v1 >>> 5) + k2[1]);
                v1 += ((v0 << 4) + k2[2]) ^ (v0 + sum) ^ ((v0 >>> 5) + k2[3]);
            }
            re[I * 2] = v0;
            re[I * 2 + 1] = v1;
        }
        re[0] = (re[0] >>> k2[0] % 16) | (re[0] << (32 - (k2[0] % 16)));
        re[0] += k2[2];
        re[0] -= k2[2];
        re[1] = (re[1] << k2[1] % 16) | (re[1] >>> (32 - (k2[1] % 16)));
        re[1] -= k2[3];
        re[1] = (re[1] << k2[3] % 16) | (re[1] >>> (32 - (k2[3] % 16)));
        re[2] = (re[2] << k2[0] % 16) | (re[2] >>> (32 - (k2[0] % 16)));
        re[2] = (re[2] >>> k2[2] % 16) | (re[2] << (32 - (k2[2] % 16)));
        re[2] = (re[2] >>> k2[0] % 16) | (re[2] << (32 - (k2[0] % 16)));
        re[2] = (re[2] << k2[2] % 16) | (re[2] >>> (32 - (k2[2] % 16)));
        re[2] ^= k2[2];
        re[3] = (re[3] >>> k2[1] % 16) | (re[3] << (32 - (k2[1] % 16)));
        re[3] -= k2[3];
        re[3] = (re[3] << k2[3] % 16) | (re[3] >>> (32 - (k2[3] % 16)));
        re[0] += k2[0];
        re[0] -= k2[2];
        re[0] = (re[0] >>> k2[2] % 16) | (re[0] << (32 - (k2[2] % 16)));
        re[1] += k2[1];
        re[1] = (re[1] >>> k2[3] % 16) | (re[1] << (32 - (k2[3] % 16)));
        re[1] += k2[3];
        re[1] -= k2[3];
        re[2] = (re[2] >>> k2[0] % 16) | (re[2] << (32 - (k2[0] % 16)));
        re[2] ^= k2[2];
        re[2] = (re[2] << k2[2] % 16) | (re[2] >>> (32 - (k2[2] % 16)));
        re[3] -= k2[1];
        re[3] -= k2[3];
        re[3] -= k2[3];
        re[3] ^= k2[3];
        {
            let hc = "0123456789abcdef".split("");
            for (let i = 0; i < re.length; i++) {
                let j = 0,
                    s = "";
                for (; j < 4; j++)
                    s += hc[(re[i] >> (j * 8 + 4)) & 15] + hc[(re[i] >> (j * 8)) & 15];
                re[i] = s;
            }
            re = re.join("");
        }
        let rt = "v=220120200217" + "&did=" + solt + "&tt=" + tt + "&sign=" + re;
        return rt;
    }

    private getTime = () => {
        return parseInt((new Date().getTime() / 1e3).toString(), 10);
    }
}

