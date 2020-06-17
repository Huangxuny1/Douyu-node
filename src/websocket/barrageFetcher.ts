import absWebsocket from './absWebsocket'

export default class Barrage extends absWebsocket {
    private roomid!: string | number;

    constructor(url: string, roomid: string | number) {
        super(url)
        this.roomid = roomid;
    }

    async login(msgHandler: (obj: any) => void): Promise<void> {
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
        await this.send({ type: 'joingroup', rid: this.roomid, gid: '-9999' })
        this.heartbeat('type@=mrkl/', 45000, "roomid is " + this.roomid)
        this.onmessage(msgHandler);
    }


}

