import absWebsocket from './absWebsocket'
import { log4js } from '../global'

const logger =  log4js.getLogger("Barrage")
export default class Barrage extends absWebsocket {

    private roomid!: string | number;
    private heartbeatInterval!: NodeJS.Timeout;

    constructor(url: string, roomid: string | number) {
        super(url)
        this.roomid = roomid;
    }

    protected async login(/*msgHandler: (obj: any) => void*/): Promise<void> {
        await this.send({
            type: 'loginreq',
            room_id: this.roomid,
            dfl: { sn: '105', ss: '1' },
            username: '61609154',
            uid: '61609154',
            ver: '20190610',
            aver: '218101901',
            ct: '0'
        })
        await this.send({
            type: 'joingroup',
            rid: this.roomid,
            gid: '-9999'
        })
        this.heartbeat(45000, "roomid is " + this.roomid).then(t => this.heartbeatInterval = t)
        this.onmessage(msg => {
            logger.debug(msg);
            this.getMsgHandler(msg);
        });
    }

    protected heartbeatContent = (): string | object => {
        return 'type@=mrkl/';
    }

    protected closeHandler = async (): Promise<void> => {
        if (this.heartbeatInterval !== undefined) {
            clearInterval(this.heartbeatInterval);
        }
    }

}

