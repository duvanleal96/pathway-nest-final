import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Request, request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class GuardAuth implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest().headers.authorization;
    if (request) {
      const autorization = request.split(' ')[1];
      const key =
        '99e4c497d8b4c049ce41e71ff04055adc01714bccdf2f901e4c1d16ffabcef571398fa2b416ddc1037a98c4040c2f277c1bbb2dbc647ed65a2acaf657ac229ec';
      if (autorization != undefined && autorization == key) {
        return true;
      }
    }
    return false;
  }
}
