<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" alt="Nest Logo" width="200" />
</p>

# Telegram Bot with Firestore Integration

This project is an API application built with NestJS that integrates with the Telegram Bot API and utilizes Firebase Firestore for message storage. It provides RESTful endpoints to send, receive, update, and delete messages via the Telegram Bot API, with the messages being stored in Firestore.

 

## Features

- Connects to the Telegram Bot API to send and receive messages.

- Saves incoming messages to Firebase Firestore.

- Provides RESTful endpoints for interacting with messages.

- Supports CRUD operations (Create, Read, Update, Delete) for messages.

 

## Prerequisites

- Node.js (v14 or higher)

- NPM (Node Package Manager)

- Firebase project with Firestore enabled

- Telegram Bot API token

 

## Installation

$ npm install

 

## Getting Started

1. Rename the .env.example file to .env.

2. Update the .env file with your Firebase and Telegram Bot API credentials.

3. Run the application in development mode: `$ npm run start:dev`

 

## API Endpoints

- GET /messages - Retrieve all messages.

- GET /messages/:id - Retrieve a specific message by ID.

- POST /messages - Create a new message.

- PUT /messages/:id - Update a message.

- DELETE /messages/:id - Delete a message.

 

## License

This project is MIT licensed.
