import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-8">
      <h1 className="text-5xl font-bold text-blue-700 drop-shadow-lg">Welcome to Next.js Demo!</h1>
      <p className="text-lg text-gray-600 max-w-xl">Khám phá dự án Next.js với giao diện Tailwind CSS hiện đại, đồng bộ. Dễ dàng chuyển trang với navigation phía trên. Hãy trải nghiệm các tính năng nổi bật của chúng tôi!</p>
      <Image src="/globe.svg" alt="Globe" width={120} height={120} className="mx-auto animate-spin-slow" />
      <a href="/products" className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">Khám phá sản phẩm</a>
    </div>
  );
}
