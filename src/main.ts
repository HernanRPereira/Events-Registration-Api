import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Swagger:

  const config = new DocumentBuilder()
    .setTitle('Events Registration')
    .setDescription('Events Registration')
    .setVersion('1.0')
    .addTag('Events')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  //Se agrega persistencia:
  //Se crea una variable PORT:
  const port = process.env.PORT || 4000;

  app.setGlobalPrefix('/v1/api');
  await app.listen(port);

  console.log(`Application is running on: http://localhost:${port}/v1/api`);
}
bootstrap();
