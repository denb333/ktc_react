import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar />
      <main className="mx-[5%] flex flex-col items-center">
        <div className="max-w-xl w-full bg-white shadow rounded p-8 mt-8">
          <h1 className="text-3xl font-bold mb-4">Contact</h1>
          <p className="mb-4">Liên hệ với chúng tôi qua email: <span className="font-semibold">contact@myweb.com</span></p>
          <form className="space-y-4">
            <input type="text" placeholder="Tên của bạn" className="w-full border rounded px-3 py-2" />
            <input type="email" placeholder="Email" className="w-full border rounded px-3 py-2" />
            <textarea placeholder="Nội dung" className="w-full border rounded px-3 py-2" rows={4}></textarea>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Gửi</button>
          </form>
        </div>
      </main>
    </div>
  );
}