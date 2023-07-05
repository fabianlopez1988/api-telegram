import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { FirestoreService } from 'src/firestore/firestore.service';

@Module({
  controllers: [MessagesController],
  providers: [FirestoreService],
})
export class MessagesModule {}
