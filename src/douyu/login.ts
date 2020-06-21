import { requests, log4js } from '../global'
import * as QRCode from 'qrcode';
import * as util from 'util';
import * as setCookie from 'set-cookie-parser';
import * as fs from 'fs';

const generatoeCodeUrl = 'https://passport.douyu.com/scan/generateCode';
const headerReferer =
    'https://passport.douyu.com/index/login?passport_reg_callback=PASSPORT_REG_SUCCESS_CALLBACK&passport_login_callback=PASSPORT_LOGIN_SUCCESS_CALLBACK&passport_close_callback=PASSPORT_CLOSE_CALLBACK&passport_dp_callback=PASSPORT_DP_CALLBACK&type=login&client_id=1&state=https%3A%2F%2Fwww.douyu.com%2F&source=click_topnavi_login';
const headerUserAgent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36';

const logger = log4js.getLogger("Login")
class DouyuLogin {
    private logined: boolean = false;
    /**
     * 斗鱼登陆  获取Cookie 用于 wss://wsproxy.douyu.com 的一些验证
     * 
     * 首次运行会 需要先扫码模拟登陆. 然后获取 cookies 存入 {projectRoot}/cookie.txt  中
     * 之后运行则会先从 cookie.txt 中获取cookie . 
     * 测试如果cookie 有效则直接使用本地cookie . 
     * 无效则需要扫码登陆
     */
    public login = async (): Promise<DouyuCookie> => {
        let cookies: string[] = [];
        const fileName = 'cookie.txt'

        if (fs.existsSync(fileName)) {
            cookies = fs.readFileSync(fileName, 'utf-8').split('\n');
            requests.jar.setCookies(cookies);
        }
        let test = await requests.get('https://www.douyu.com/member').redirects(0).catch(err => { })

        if (test === undefined) {
            cookies = await this.getCookie();

            if (fs.existsSync(fileName)) {
                fs.unlinkSync(fileName);
            }

            fs.writeFile(fileName, cookies.join('\n'), fs => { });
        }
        this.logined = true
        let obj: DouyuCookie = {};
        setCookie.parse(cookies).map(it => {
            obj[it.name] = it.value
        })
        return obj;
    }

    public whoami = async (): Promise<string | void> => {
        return requests.get('https://www.douyu.com/member/cp/cp_rpc_ajax')
            .then(res => {
                return res.text
            })
            .catch(err => {
                logger.error(err)
            });
    }

    /**
     * 获取 wss wsproxy 我地址及端口好... 
     * 也可以不需要每次获取 因为基本上 抓包获取一个地址+端口可以一直使用.
     * @param roomid 房间号
     */
    public fetchProxy = async (roomid: string | number): Promise<any> => {
        return requests.post("https://www.douyu.com/lapi/live/gateway/web/" + roomid + "?isH5=1")
            .set('User-Agent', headerUserAgent)
            .set('accept', 'application/json, text/plain, */*')
            .set('x-requested-with', 'XMLHttpRequest')
            .set('sec-fetch-site', 'same-origin')
            .set('referer', 'https://www.douyu.com/' + roomid)
            .then(res => {
                return JSON.parse(res.text).data.wss
            }).catch(err => {
                console.log(err)
            })
    }

    /**
     * 获取generatoeCode 用于登陆 和check 二维码扫描情况 , 并生成二维码
     */
    private requestLogin = async (): Promise<object> => {
        return requests
            .post(generatoeCodeUrl)
            .set('Referer', headerReferer)
            .set('User-Agent', headerUserAgent)
            .send('client_id=1')
            .then(res => {
                QRCode.toString(res.body.data.url, { type: 'terminal' }, (err, url) => {
                    console.log(url);
                });
                return res.body;
            })
            .catch(err => {
                logger.error(err);
            });
    }
    /**
     * 根据 generatoeCode 轮询二维码扫描情况 ... 如果扫描成功则返回获取cookie的url
     */
    private checkScan = async (): Promise<object> => {
        let checkUrl: any = await this.requestLogin();
        return new Promise((resolve, reject) => {
            const checkInterval = setInterval(() => {
                requests.get(util.format('https://passport.douyu.com/lapi/passport/qrcode/check?time=%s&code=%s',
                    new Date().getTime(), checkUrl.data.code))
                    .set('Referer', headerReferer)
                    .set('User-Agent', headerUserAgent)
                    .set('accept-language', 'zh-CN,zh;q=0.9')
                    .set('authority', 'passport.douyu.com')
                    .set('accept', 'application/json, text/javascript, */*; q=0.01')
                    .set('sec-fetch-dest', 'empty')
                    .set('x-requested-with', 'XMLHttpRequest')
                    .set('sec-fetch-mode', 'cors')
                    .then(res => {
                        console.log(res.body);
                        if (res.body.error === 0) {
                            clearInterval(checkInterval);
                            resolve(res.body);
                        }
                    })
                    .catch(err => {
                        logger.error(err);
                    });
            }, 1000)
        })
    }

    /**
     * 获取cookie
     */
    private getCookie = async (): Promise<string[]> => {
        let data: any = await this.checkScan();

        return requests.head('https:' + data.data.url + '&callback=appClient_json_callback&_=' + new Date().getTime())
            .set('Accept', 'application/json, text/javascript, */*; q=0.01')
            .set('Accept-Encoding', 'gzip, deflate, br')
            .set('Accept-Language', 'zh-CN,zh;q=0.9')
            .set('X-Requested-With', 'XMLHttpRequest')
            .set('User-Agent', headerUserAgent)
            .then((res: any) => {
                return res.headers['set-cookie'];
            })
            .catch(err => {
                logger.error(err);
            });
    }

    public get alreadyLogined(): boolean {
        return this.logined;
    }


    // developing  赠送荧光棒

    public getBackpack = async (roomid: string | number): Promise<void> => {
        return requests.get('https://www.douyu.com/japi/prop/backpack/web/v1?rid=' + roomid)
            .set('authority', 'www.douyu.com')
            .set('accept', 'application/json, text/plain, */*')
            .set('referer', 'https://www.douyu.com/' + roomid)
            .set('origin', 'https://www.douyu.com')
            .set('sec-fetch-site', 'same-origin')
            .set('sec-fetch-mode', 'cors')
            .set('sec-fetch-dest', 'empty')
            .then(res => {
                logger.warn(res.status, res)
            })
            .catch(err => {
                logger.error(err);
            })

    }

    public gift = async (roomid: string | number): Promise<void> => {
        return requests.post('https://www.douyu.com/japi/prop/donate/mainsite/v1')
            .set('authority', 'www.douyu.com')
            .set('accept', 'application/json, text/plain, */*')
            .send('propId=268&propCount=1&roomId=' + roomid + '&bizExt=%7B%22yzxq%22%3A%7B%7D%7D')
            .set('referer', 'https://www.douyu.com/' + roomid)
            .set('origin', 'https://www.douyu.com')
            .set('sec-fetch-site', 'same-origin')
            .set('sec-fetch-mode', 'cors')
            .set('sec-fetch-dest', 'empty')
            .then(res => {
                logger.info(res.status, res)
            }).catch(err => logger.error(err))
    }

}

interface DouyuCookie {
    [key: string]: string
}

export { DouyuLogin, DouyuCookie };