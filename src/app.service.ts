import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(process.env.PORT);

    return `Hello World! PORT = ${process.env.PORT} change`;
  }
}
