
export const dynamic = "force-static"; 



const buildTime = new Date().toLocaleString();
async function getProducts() {
  const res = await fetch("https://server.aptech.io/online-shop/products");
  return res.json();
}

export default async function SSGPage() {
  const products = await getProducts();
 
  return (
    <main className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow space-y-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-2">SSG - Static Site Generation</h1>
      <p className="text-gray-600">Dữ liệu được lấy tại thời điểm build, không đổi cho đến khi build lại.</p>
      <p className="text-gray-600"><b>Thời gian render (build):</b> {buildTime}</p>
      <ul className="divide-y divide-gray-200 bg-gray-50 rounded">
        {products.slice(0, 5).map((p: any) => (
            <li key={p.id} className="py-3 px-2 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-blue-50 transition">
            <span className="font-medium">{p.name}</span>
            <span className="text-sm text-gray-500">{p.price}$</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-gray-400 italic">
        Trang này sử dụng SSG, dữ liệu được lấy tại thời điểm build và không thay đổi cho đến khi build lại.
      </p>
    </main>
  );
}