import { createContext } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3002", {
  withCredentials: true,
});

const SocketContext = createContext(socket);

export default SocketContext;