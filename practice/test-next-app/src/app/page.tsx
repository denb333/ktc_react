import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 flex flex-col items-center">
      <Navbar />
      <div className="max-w-xl w-full bg-white shadow rounded p-8 mt-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Hello World</h1>
        <p className="text-lg mb-6 text-center">Chào mừng bạn đến với trang chủ! Hãy khám phá các trang About, Blog và Contact để biết thêm về chúng tôi.</p>
        
      </div>
    </div>
  );
}
