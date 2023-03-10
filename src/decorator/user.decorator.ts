/*
https://docs.nestjs.com/openapi/decorators#decorators
*/

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    
    const request = ctx.switchToHttp().getRequest();

    return request.body.firstName ?? "mate"

  },
);