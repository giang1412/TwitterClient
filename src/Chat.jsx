import { useEffect } from "react";
import { io } from "socket.io-client";

export default function Chat() {
  useEffect(() => {
    const socket = io(import.meta.env.VITE_API_URL);
    socket.on("connect", () => {
      console.log(socket.id);
      socket.on("hello", (arg) => {
        console.log(arg);
      });
      socket.emit("hi", {
        message: `Xin chào, đã kết nối thành công tới ${socket.id}`,
      });
    });
    socket.on("disconnect", () => {
      console.log(socket.id); // undefined
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  return <div>Chat</div>;
}
