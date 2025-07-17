// app/productDetail/[id]/page.tsx
import Image from "next/image";
import { Product } from "@/app/types";

// Cấu hình ISR và dynamic route behavior
export const revalidate = 60;
export const dynamic = "force-static";
export const dynamicParams = true;

// Hàm generateStaticParams
export async function generateStaticParams() {
  const products: Product[] = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20").then((res) =>
    res.json()
  );

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Hàm lấy 1 sản phẩm
async function getProduct(id: string) {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;
  return res.json();
}

// Component chính
export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    return <div className="text-center py-10">Sản phẩm không tồn tại.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 border-2 border-gray-300 rounded-lg mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-red-600 font-bold text-xl mb-2">
              {product.price.toLocaleString()}₫
            </p>
            <p className="text-gray-600 mb-4">{product.description}</p>
          </div>

          <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
  );
}
