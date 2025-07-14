import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar />
      <main className="mx-[5%] flex flex-col items-center justify-center min-h-[80vh]">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mt-8 animate-fade-in">
          <h1 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h1>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input type="email" className="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none px-2 py-2 transition-all duration-300 bg-transparent" placeholder="Nhập email..." />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Mật khẩu</label>
              <input type="password" className="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none px-2 py-2 transition-all duration-300 bg-transparent" placeholder="Nhập mật khẩu..." />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-all duration-300 shadow-md hover:scale-105">Đăng nhập</button>
          </form>
        </div>
      </main>
    </div>
  );
}
