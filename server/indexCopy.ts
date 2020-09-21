import express, { Request, Response } from "express";
import socketIo from "socket.io";
import dotenv from "dotenv";
import { createServer } from "http";

dotenv.config();
const app = express();
const server = createServer(app);
const io = socketIo(server);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Server reached!" });
});

// Attach Socket.io to the server instance.

server.listen(process.env.PORT, () =>
    console.log(`> Server Started on http://localhost:${process.env.PORT}`)
);

// Event handlers.
io.on("connection", (socket) => {
    socket.on("join-room", (roomId, userId) => {
        socket.join(roomId);
        console.log("Connected ", userId);
        socket.broadcast.to(roomId).emit("user-connected", userId);

        socket.on("disconnect", () => {
            console.log("disconnected", userId);
            socket.broadcast.to(roomId).emit("user-disconnected", userId);
        });
    });
});
