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
    public login = async (): Promise<setCookie.Cookie[]> => {
        let cookies: string[] = [];
        const fileName = 'cookie.txt'

        if (fs.existsSync(fileName)) {
            cookies = fs.readFileSync(fileName, 'utf-8').split('\n');
            requests.jar.setCookies(cookies);
        } else {
            cookies = await this.getCookie();

            if (fs.existsSync(fileName)) {
                fs.unlinkSync(fileName);
            }

            fs.writeFile(fileName, cookies.join('\n'), fs => { });
        }
        return setCookie.parse(cookies)
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
}

export { DouyuLogin };