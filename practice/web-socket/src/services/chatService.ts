import { db } from "../lib/firebase/config";
import { addDoc, collection, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";

// Hàm tạo chatId duy nhất từ 2 user
export const getChatId = (userA: string, userB: string) => {
  return [userA, userB].sort().join("_"); // Ví dụ: "user123_user456"
};

// Gửi tin nhắn
export const sendMessage = async (senderId: string, receiverId: string, text: string) => {
  if (!text.trim()) return;

  const chatId = getChatId(senderId, receiverId);
  await addDoc(collection(db, "chats", chatId, "messages"), {
    text,
    senderId,
    receiverId,
    createdAt: serverTimestamp(),
  });
};

// Lắng nghe tin nhắn
export const listenMessages = (
  userA: string,
  userB: string,
  callback: (messages: any[]) => void
) => {
  const chatId = getChatId(userA, userB);
  const q = query(
    collection(db, "chats", chatId, "messages"),
    orderBy("createdAt", "asc")
  );

  return onSnapshot(q, (snapshot) => {
    const msgs = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(msgs);
  });
};
