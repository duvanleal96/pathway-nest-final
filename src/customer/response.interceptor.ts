import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { CustomerGetDto } from './dto/customer.get.dto';

export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap((data) => {
        if (data.email == undefined) {
          data.email = 'null';
        }
        if (data.length > 1) {
          data.forEach((user: CustomerGetDto) => {
            if (user.email == undefined) {
              user.email = 'null';
            }
          });
        }
      }),
    );
  }
}
