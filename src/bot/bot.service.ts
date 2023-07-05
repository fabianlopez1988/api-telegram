import { Injectable, OnModuleInit } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();
import { FirestoreService } from '../firestore/firestore.service';

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
      const chatId = msg.chat.id;
      const messageText = msg.text;

      try {
        await this.firestoreService.saveMessage({ chatId, text: messageText });
        bot.sendMessage(chatId, 'Mensaje guardado en Firestore.');
      } catch (error) {
        bot.sendMessage(chatId, 'Error al guardar el mensaje en Firestore.');
      }
    });
  }
}
