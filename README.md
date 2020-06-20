# Douyu-node


一个`斗鱼(douyu.com)`弹幕抓取的玩具. 主要使用 Typescript 实现

- 扫描二维码登陆
- 可以发送弹幕
- 心跳

Douyu 默认会开启两个 websocket 连接 

一个是不需要验证的`danmuproxy.douyu.com` 会返回 弹幕消息 礼物 等
一个是需要验证的 `wsproxy.douyu.com`  ,发送弹幕是从这个wss连接发送

## Screenshot

![screenshot.gif](https://github.com/Huangxuny1/Douyu-node/blob/master/doc/screenshot.gif?raw=true)

## Usage

```bash
yarn # 安装依赖
yarn start  # 需要安装typescript 即tsc命令可用
```

## 自定义

### 抓取弹幕

```javascript

(
    async () => {
        let client = new DouyuClient(110);
        await client.start();
    }
)();

```

### 自定义消息处理

```javascript

client.setBarrageMsgCallback(obj=>{
    ... // 你的逻辑
});

client.setProxyCallback(obj =>{
    ... // 你的逻辑
});
```

### 消息持久化

目前只完成了 kafka, 使用 [node-rdkafka](https://github.com/Blizzard/node-rdkafka)

```javascript
let persistence = new PersistenceFactory(persistenceType.KAFKA).getPersistence();

client.setBarrageMsgCallback(obj=>{
    persistence.save(obj);
});
```

未来会支持 MySQL

---

功能还不算完善. 第一次用TS写程序. 如有不对的地方欢迎提PR斧正 ...

# todo 

- [ ] 尽可能干掉`any` , 消息类型都用 interface map 一下
- [ ] MySQL
- [ ] WebServer&WebUI
- [ ] ...

---


### Contact me

![wechat.jpg](https://github.com/Huangxuny1/Douyu-node/blob/master/doc/wechat.JPG?raw=true)

### 免责 

本程序仅供内部学习和交流使用,请勿作为商业用户或者扰乱平台正常秩序用途.请在遵守法律的前提下使用本站程序，对用户在使用过程中造成任何损失，本人不负任何责任.


