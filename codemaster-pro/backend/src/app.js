const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const socketIo = require("socket.io");
const authRoutes = require("./routes/auth");
const courseRoutes = require("./routes/courses");
const sessionRoutes = require("./routes/sessions");
const dsaRoutes = require("./routes/dsa");

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

// MongoDB Connect
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/dsa", dsaRoutes);

// Socket.io for live sessions
io.on("connection", (socket) => {
  socket.on("join-session", (sessionId) => socket.join(sessionId));
  socket.on("chat-message", (data) =>
    io.to(data.sessionId).emit("message", data)
  );
});

server.listen(5000, () => console.log("Server on 5000"));
