"use client";
import { useEffect, useState } from "react";

export default function CSRPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://server.aptech.io/online-shop/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <main className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow space-y-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-2">CSR - Client Side Rendering</h1>
      <p className="text-gray-600">Dữ liệu được fetch hoàn toàn ở phía client sau khi trang đã tải.</p>
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <ul className="divide-y divide-gray-200 bg-gray-50 rounded">
          {products.slice(0, 5).map((p) => (
            <li key={p.id} className="py-3 px-2 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-blue-50 transition">
              <span className="font-medium">{p.name}</span>
              <span className="text-sm text-gray-500">{p.price}$</span>
            </li>
          ))}
        </ul>
      )}
      <p className="text-xs text-gray-400 italic">
        Trang này không sử dụng SSR/SSG/ISR. Dữ liệu chỉ xuất hiện sau khi tải xong ở client.
      </p>
    </main>
  );
}