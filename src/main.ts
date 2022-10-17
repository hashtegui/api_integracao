import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initOracleClient } from 'oracledb';

async function bootstrap() {
  initOracleClient({
    libDir: 'C:\\instantclient',
  });

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
