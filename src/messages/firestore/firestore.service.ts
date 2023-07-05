import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { Message } from 'src/messages/message.model';

@Injectable()
export class FirestoreService {
  private firestore: FirebaseFirestore.Firestore;

  constructor() {
    this.firestore = admin.firestore();
  }

  async getAllMessages(): Promise<Message[]> {
    const snapshot = await this.firestore.collection('messages').get();

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      text: doc.data().text,
    }));
  }

  async getMessageById(id: string): Promise<Message> {
    const docRef = this.firestore.collection('messages').doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      throw new Error('Message not found');
    }

    const message: Message = {
      id: doc.id,
      text: doc.data().text,
    };

    return message;
  }

  async saveMessage(message: Message): Promise<void> {
    try {
      await this.firestore.collection('messages').add(message);
    } catch (error) {
      throw new Error('Error saving message to Firestore');
    }
  }

  async updateMessage(id: string, updatedMessage: Message): Promise<void> {
    try {
      const messageRef = this.firestore.collection('messages').doc(id);
      await messageRef.update({ ...updatedMessage });
    } catch (error) {
      throw new Error('Error updating message in Firestore');
    }
  }

  async deleteMessage(id: string): Promise<void> {
    try {
      const messageRef = this.firestore.collection('messages').doc(id);
      await messageRef.delete();
    } catch (error) {
      throw new Error('Error deleting message in Firestore');
    }
  }
}
