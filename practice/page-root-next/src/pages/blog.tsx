export default function Blog() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Blog</h1>
      <div className="space-y-6">
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition border border-gray-100">
          <h2 className="text-2xl font-semibold mb-2">Làm quen với Next.js</h2>
          <p className="text-gray-600 mb-2">Next.js là framework React mạnh mẽ giúp xây dựng web hiện đại, tối ưu SEO và hiệu năng.</p>
          <span className="text-xs text-gray-400">Đăng ngày: 01/06/2024</span>
        </div>
        <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition border border-gray-100">
          <h2 className="text-2xl font-semibold mb-2">Tích hợp Tailwind CSS</h2>
          <p className="text-gray-600 mb-2">Tailwind CSS giúp bạn xây dựng giao diện đẹp, responsive chỉ với class tiện lợi.</p>
          <span className="text-xs text-gray-400">Đăng ngày: 30/05/2024</span>
        </div>
      </div>
    </div>
  );
}