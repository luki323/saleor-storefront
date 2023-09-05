import type {NextMiddleware, NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

import {isKeyDefined} from '@/lib/tools/is-key-defined';

function createResponseWithEarlyReturn() {
  // eslint-disable-next-line functional/prefer-readonly-type -- It needs to be mutable
  const earlyReturn: {value?: NextResponse} = {};

  class MiddieResponse extends NextResponse {
    static override json<Body>(
      ...params: Parameters<typeof NextResponse.json<Body>>
    ) {
      return (earlyReturn.value = super.json(...params));
    }
    static override redirect(
      ...params: Parameters<typeof NextResponse.redirect>
    ) {
      return (earlyReturn.value = super.redirect(...params));
    }
    static override rewrite(
      ...params: Parameters<typeof NextResponse.rewrite>
    ) {
      return (earlyReturn.value = super.rewrite(...params));
    }
    static override next(...params: Parameters<typeof NextResponse.next>) {
      return (earlyReturn.value = super.next(...params));
    }
  }
  return {earlyReturn, MiddieResponse};
}

export type HandlerThisObj = Pick<
  ReturnType<typeof createResponseWithEarlyReturn>,
  'MiddieResponse'
>;

export type Handler = (
  this: HandlerThisObj,
  req: NextRequest,
  res: NextResponse,
) => void | Promise<void>;

interface Middie {
  (req: NextRequest): ReturnType<NextMiddleware>;
  readonly use: (handler: Handler) => void;
}

export function createMiddie() {
  const {earlyReturn, MiddieResponse} = createResponseWithEarlyReturn();

  const handlerThisObj: HandlerThisObj = {
    MiddieResponse,
  };
  let handlers: readonly Handler[] = [];

  function use(handler: Handler) {
    handlers = [...handlers, handler];
  }
  const middie: Middie = async function middie(req) {
    const res = new MiddieResponse();

    for (const handler of handlers) {
      await handler.call(handlerThisObj, req, res);

      if (isKeyDefined(earlyReturn, 'value')) {
        return earlyReturn.value;
      }
    }
    return res;
  };
  // @ts-expect-error There's no other way to do this without mutating an object
  middie.use = use;

  return middie;
}
