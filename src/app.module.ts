import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { TelegramModule } from 'nestjs-telegram';

import * as dotenv from 'dotenv';
import { BotService } from './bot/bot.service';
import { FirestoreService } from './firestore/firestore.service';
dotenv.config();

@Module({
  imports: [
    TelegramModule.forRoot({
      botKey: process.env.TELEGRAM_BOT_API_KEY,
    }),
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService, BotService, FirestoreService],
})
export class AppModule {}
