import { useEffect, useState } from "react";
import { db } from "../lib/firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export type Message = {
  id: string;
  text: string;
  senderId?: string;
  createdAt?: any; // Firestore timestamp
};

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs: Message[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Message, "id">),
      }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, []);

  return messages;
};
