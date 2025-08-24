"use client";
import { useState } from "react";
import ChatBox from "../../components/chatRooms";

export default function ChatPage() {
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  const friendId = currentUserId === "user123" ? "user456" : "user123";

  if (!currentUserId) {
    return (
      <div className="p-4 flex flex-col items-center gap-4">
        <h2>Chọn user</h2>
        <button className="border-1" onClick={() => setCurrentUserId("user123")}>Login as user123</button>
        <button className="border-1" onClick={() => setCurrentUserId("user456")}>Login as user456</button>
      </div>
    );
  }

  return <div className="p-4 flex flex-col items-center gap-4">
    <ChatBox currentUserId={currentUserId} friendId={friendId} />
  </div>;
}
