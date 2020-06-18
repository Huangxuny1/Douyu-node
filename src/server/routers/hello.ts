import Koa from 'koa';
import Router from 'koa-router';

const hello = async (
    ctx: Koa.ParameterizedContext<any, Router.IRouterParamContext<any, {}>>
) => {
    ctx.body = {
        error: 0,
        hello: 'world'
    };
};

export default hello;