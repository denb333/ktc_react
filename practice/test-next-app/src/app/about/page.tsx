import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Navbar />
      <main className="mx-[5%] flex flex-col items-center">
        <div className="max-w-xl w-full bg-white shadow rounded p-8 mt-8">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg">Chúng tôi là một nhóm phát triển web đam mê sáng tạo, luôn nỗ lực mang lại những sản phẩm chất lượng và trải nghiệm tốt nhất cho khách hàng.</p>
        </div>
      </main>
    </div>
  );
}