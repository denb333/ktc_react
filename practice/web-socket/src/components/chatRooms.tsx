"use client";

import { useEffect, useState } from "react";
import { sendMessage, listenMessages } from "@/services/chatService";

export default function ChatBox({ currentUserId, friendId }: { currentUserId: string, friendId: string }) {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");

  // Lắng nghe tin nhắn realtime
  useEffect(() => {
    const unsubscribe = listenMessages(currentUserId, friendId, setMessages);
    return () => unsubscribe();
  }, [currentUserId, friendId]);

  const handleSend = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;
    setInput("");
    await sendMessage(currentUserId, friendId, trimmedInput);
  
  };

  return (
    <div className="p-4 border rounded w-[400px]">
      <div className="h-[300px] overflow-y-auto border p-2 mb-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-2 my-1 rounded ${
              msg.senderId === currentUserId ? "bg-blue-200 text-right" : "bg-gray-200 text-left"
            }`}
          >
            <p>{msg.text}</p>
            <small className="text-xs">{msg.senderId}</small>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập tin nhắn..."
          className="flex-1 border rounded px-2"
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 rounded">
          Gửi
        </button>
      </div>
    </div>
  );
}
