import { Injectable, OnModuleInit } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();
import { FirestoreService } from '../messages/firestore/firestore.service';

@Injectable()
export class BotService implements OnModuleInit {
  constructor(private readonly firestoreService: FirestoreService) {}

  onModuleInit() {
    this.botMessage();
  }

  botMessage() {
    process.env.NTBA_FIX_319 = '1';
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const TelegramBot = require('node-telegram-bot-api');

    const token = process.env.TELEGRAM_BOT_API_KEY;

    const bot = new TelegramBot(token, { polling: true });
    bot.on('message', async (msg: any) => {
      const id = msg.chat.id;
      const messageText = msg.text;

      try {
        await this.firestoreService.saveMessage({ id, text: messageText });
        bot.sendMessage(id, 'Mensaje guardado en Firestore.');
      } catch (error) {
        bot.sendMessage(id, 'Error al guardar el mensaje en Firestore.');
      }
    });
  }
}
