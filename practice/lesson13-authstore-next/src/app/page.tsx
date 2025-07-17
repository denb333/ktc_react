
import Link from 'next/link';


export default function Home() {
  

  return (
    <div className="bg-gray-50 flex justify-center items-center h-screen">
     
        {/* <h1 className="text-2xl font-bold mb-4">Home Page</h1> */}
        <Link href="/login" className="text-blue-500 text-2xl font-bold bg-blue-500 text-white px-4 py-2 rounded-md">Go to Login</Link>
     
    </div>
  );
}
