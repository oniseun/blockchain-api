import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as requestIp from 'request-ip';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET',
    credentials: true,
  });
  app.use(requestIp.mw());
  app.use(helmet());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
