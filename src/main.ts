import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const adminConfig: ServiceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  };

  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });

  app.enableCors();

  await app.listen(5000);
}
bootstrap();
