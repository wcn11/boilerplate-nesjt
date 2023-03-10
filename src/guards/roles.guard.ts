/*
https://docs.nestjs.com/guards#guards
*/

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if(!roles) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return true;
    // return this.matchRoles(roles, user.roles);
  }
  
//   matchRoles(roles: string[], roles1: any): boolean | Promise<boolean> | Observable<boolean> {
//   throw new Error('Function not implemented.');
// }

}
