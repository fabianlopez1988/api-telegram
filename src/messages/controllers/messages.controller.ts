import {
  Controller,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Get,
} from '@nestjs/common';
import { FirestoreService } from '../firestore/firestore.service';
import { Message } from '../message.model';

@Controller('messages')
export class MessagesController {
  constructor(private readonly firestoreService: FirestoreService) {}

  @Get()
  async getAllMessages(): Promise<Message[]> {
    return this.firestoreService.getAllMessages();
  }

  @Get(':id')
  async getMessageById(@Param('id') id: string): Promise<Message> {
    return this.firestoreService.getMessageById(id);
  }

  @Post()
  async createMessage(@Body() message: Message): Promise<void> {
    await this.firestoreService.saveMessage(message);
  }

  @Put(':id')
  async updateMessage(
    @Param('id') id: string,
    @Body() message: Message,
  ): Promise<void> {
    await this.firestoreService.updateMessage(id, message);
  }

  @Delete(':id')
  async deleteMessage(@Param('id') id: string): Promise<void> {
    await this.firestoreService.deleteMessage(id);
  }
}
