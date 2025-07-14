export default function Contact() {
  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Liên hệ với chúng tôi</h1>
      <form className="bg-white rounded-lg shadow p-8 space-y-6">
        <div>
          <label className="block text-gray-700 mb-1">Họ và tên</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Nhập họ tên..." />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Nhập email..." />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Nội dung</label>
          <textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4} placeholder="Nhập nội dung liên hệ..." />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Gửi liên hệ</button>
      </form>
    </div>
  );
}