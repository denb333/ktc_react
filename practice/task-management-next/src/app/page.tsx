import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
 <div className="flex justify-center items-center h-screen">
       <Link href="/login" className="text-blue-500 text-2xl font-bold bg-blue-500 text-white px-4 py-2 rounded-md"> Go to Login</Link>
 </div>
  );
}
