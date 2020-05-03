import requests from '../agent';
import * as QRCode from 'qrcode';
import * as util from 'util';
import * as setCookie from 'set-cookie-parser';
import * as fs from 'fs';

const generatoeCodeUrl = 'https://passport.douyu.com/scan/generateCode';
const headerReferer =
    'https://passport.douyu.com/index/login?passport_reg_callback=PASSPORT_REG_SUCCESS_CALLBACK&passport_login_callback=PASSPORT_LOGIN_SUCCESS_CALLBACK&passport_close_callback=PASSPORT_CLOSE_CALLBACK&passport_dp_callback=PASSPORT_DP_CALLBACK&type=login&client_id=1&state=https%3A%2F%2Fwww.douyu.com%2F&source=click_topnavi_login';
const headerUserAgent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36';

export default class DouyuLogin {
    public doLogin = async () => {
        let cookies: Array<string> = [];
        const fileName = 'cookie.txt';

        if (fs.existsSync(fileName)) {
            cookies = fs.readFileSync(fileName, 'utf8').split('\n');
            requests.jar.setCookies(cookies);
        } else {
            cookies = (await this._getCookie()) as Array<string>;

            if (fs.existsSync(fileName)) {
                fs.unlinkSync(fileName);
            }
            // todo
            fs.writeFile(fileName, cookies.join('\n'), fs => { });
        }
        return setCookie.parse(cookies);
    };

    public whoami = async () => {
        return new Promise((resolve, reject) => {
            requests.get('https://www.douyu.com/member/cp/cp_rpc_ajax')
                .then(res => {
                    resolve(res.text);
                })
                .catch(err => {
                    reject(err);
                });
        });
    };

    private _login = async () => {
        return new Promise((resolve, reject) => {
            requests
                .post(generatoeCodeUrl)
                .set('Referer', headerReferer)
                .set('User-Agent', headerUserAgent)
                .send('client_id=1')
                .then(res => {
                    QRCode.toString(res.body.data.url, { type: 'terminal' }, (err, url) => {
                        console.log(url);
                    });
                    return resolve(res.body);
                })
                .catch(err => {
                    reject(err);
                });
        });
    };

    private _checkScan = async () => {
        let data: any = await this._login();
        return new Promise((resolve, reject) => {
            const checkInterval = setInterval(() => {
                requests
                    .get(util.format('https://passport.douyu.com/lapi/passport/qrcode/check?time=%s&code=%s',
                        new Date().getTime(),
                        data.data.code
                    )
                    )
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
                            resolve(res.body);
                            clearInterval(checkInterval);
                        }
                    })
                    .catch(err => {
                        reject(err);
                    });
            }, 1000);
        });
    };

    private _getCookie = async () => {
        let data: any = await this._checkScan();
        return new Promise((resolve, reject) => {
            requests
                .head(
                    'https:' + data.data.url + '&callback=appClient_json_callback&_=' + new Date().getTime()
                )
                .set('Accept', 'application/json, text/javascript, */*; q=0.01')
                .set('Accept-Encoding', 'gzip, deflate, br')
                .set('Accept-Language', 'zh-CN,zh;q=0.9')
                .set('X-Requested-With', 'XMLHttpRequest')
                .set('User-Agent', headerUserAgent)
                .then((res: any) => {
                    resolve(res.headers['set-cookie']);
                })
                .catch(err => {
                    reject(err);
                });
        });
    };
}
