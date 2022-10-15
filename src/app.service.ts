import { Injectable } from '@nestjs/common';

type HelloProps = {
  message: string;
};

@Injectable()
export class AppService {
  getHello(): HelloProps {
    return { message: 'Hello World!' };
  }
}
