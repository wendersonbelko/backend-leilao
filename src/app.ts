import express from "express";
import { Server as SocketIo } from 'socket.io';
import { createServer } from 'node:http';

const app = express();
const server = createServer(app);
const io = new SocketIo(server);

export { server, io, app }
