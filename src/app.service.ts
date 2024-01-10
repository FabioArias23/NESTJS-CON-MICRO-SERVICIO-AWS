import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World Esta es una nueva aplacion de Fabio!';
  }
}
