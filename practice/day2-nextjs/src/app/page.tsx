
import Link from "next/link";
import Sidebar from "./components/sidebar";
import Image from "next/image";


async function getProducts() {
  const res = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10', {
    next: { revalidate: 30 }
  });
  return res.json();
}
export default async function Home() {
  const products = await getProducts();
  return (
    <div className="mt-2">
<Sidebar/>
 <div className="max-w-[1160px] mx-auto mt-2">
      <div className="grid grid-cols-5 gap-4">
        {products.slice(0, 10).map((product: any) => (
         <Link
         key={product.id}
         href={`/productDetail/${product.id}`}
         className="block bg-white rounded-lg shadow p-3"
       >
         <div key={product.id} className="bg-white max-h flex flex-col justify-between">
            <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg h-[180px] hover:scale-105 transition-all duration-300">
              <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className=""
            />
            </div>
            <h2 className="mt-2 font-medium text-sm line-clamp-2">{product.title}</h2>
            <div className="mt-1 font-bold text-red-600 flex ">{product.price.toLocaleString()}₫</div>
            
            <div className="mt-2">
              <div className="bg-yellow-400 text-xs rounded-full px-2 py-1 flex items-center justify-center">
                🔥 Còn {Math.floor(Math.random() * 10) + 1}/10 suất
              </div>
            </div>

            <button className="mt-2 bg-blue-100 text-blue-600 font-semibold py-1 rounded">
              Mua ngay
            </button>
          </div>
       </Link>
   
        ))}
      </div>
    </div>
    </div>
   
  );
}
