import * as Koa from 'koa'
import * as Router from 'koa-router'

const getHello = async (ctx: Koa.ParameterizedContext<any, Router.IRouterParamContext<any, {}>>) => {

    ctx.body = {
        error: 0,
    }
}

export default getHello;