import absWebsocket from './absWebsocket'
import { DouyuLogin } from '../douyu/login'

export default class ProxyWorker extends absWebsocket {
    private roomid!: string | number;

    constructor(url: string, roomid: string | number) {
        super(url)
        this.roomid = roomid;
    }

    async login(): Promise<void> {
        // await this.send()
        // await this.send({ type: 'joingroup', rid: this.roomid, gid: '-9999' })
        // this.heartbeat('type@=mrkl/', 45000, "roomid is " + this.roomid)
    }


}
