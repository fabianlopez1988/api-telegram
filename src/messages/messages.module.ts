import { Module } from '@nestjs/common';
import { MessagesController } from './controllers/messages.controller';
import { FirestoreService } from 'src/messages/firestore/firestore.service';

@Module({
  controllers: [MessagesController],
  providers: [FirestoreService],
})
export class MessagesModule {}
