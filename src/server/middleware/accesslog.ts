import { Logger } from "log4js";
import Koa from 'koa';

export default function log(logger: Logger) {
    return async (ctx: Koa.BaseContext, next: () => Promise<any>) => {
        const start = Date.now();
        await next();
        const end = Date.now();
        const responseTime = end - start;
        logger.info(`响应时间为: ${(responseTime / 1000).toFixed(4)}s，请求 url : ${ctx.URL} , 客户端IP : ${ctx.ip}`);
    }
}