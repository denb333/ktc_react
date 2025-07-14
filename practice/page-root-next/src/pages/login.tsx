export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <form className="bg-white rounded-lg shadow p-8 w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">Đăng nhập</h1>
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Nhập email..." />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Mật khẩu</label>
          <input type="password" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Nhập mật khẩu..." />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Đăng nhập</button>
        <div className="text-center text-sm text-gray-500 mt-2">
          Chưa có tài khoản? <a href="/register" className="text-blue-600 hover:underline">Đăng ký</a>
        </div>
      </form>
    </div>
  );
}