// lib/firebase/config.js
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDnpvyhbjIaeTR5uS0fSE2yX1ABW0Q8in8",
  authDomain: "ktc-websocket.firebaseapp.com",
  projectId: "ktc-websocket",
  storageBucket: "ktc-websocket.appspot.com", // ⚡ sửa lại cho đúng format
  messagingSenderId: "1079855578139",
  appId: "1:1079855578139:web:f0cadf8662a6307a520cbe",
  measurementId: "G-P8833MC46D"
};

// Tránh khởi tạo lại app nhiều lần
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Firestore
export const db = getFirestore(app);

// Analytics (chỉ chạy trên trình duyệt, không SSR)
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) analytics = getAnalytics(app);
  });
}
export { analytics };
