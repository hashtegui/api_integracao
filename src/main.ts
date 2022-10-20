import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initOracleClient } from 'oracledb';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  initOracleClient({
    libDir: 'C:\\instantclient',
  });

  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
