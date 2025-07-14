import Navbar from "../components/Navbar";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar />
      <main className="mx-[5%] flex flex-col items-center">
        <div className="max-w-xl w-full bg-white shadow rounded p-8 mt-8">
          <h1 className="text-3xl font-bold mb-4">Blog</h1>
          <ul className="space-y-4">
            <li>
              <h2 className="text-xl font-semibold">Làm thế nào để học React hiệu quả?</h2>
              <p className="text-gray-700">Chia sẻ kinh nghiệm và tài nguyên giúp bạn làm chủ React nhanh chóng.</p>
            </li>
            <li>
              <h2 className="text-xl font-semibold">TailwindCSS: Công cụ thần thánh cho UI hiện đại</h2>
              <p className="text-gray-700">Khám phá cách TailwindCSS giúp tăng tốc quá trình phát triển giao diện.</p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}