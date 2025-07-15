

async function getProduct(id: string) {
  const res = await fetch(`https://server.aptech.io/online-shop/products/${id}`,{
    next:{
      revalidate: 30,
    }
  });
  if (!res.ok) return null;
  return res.json();
}
interface Product {
  params: { id: string };
}
export default async function ISRPage({ params }: Product) {
  const now = new Date().toLocaleString();
  console.log("Received params:", params);
  const product = await getProduct(params.id);
  console.log("Fetched product:", product);

  if (!product) return <div>Product not found</div>;
  return (
    <main className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow space-y-6">
      <h1 className="text-2xl font-bold text-blue-600 mb-2">ISR - Incremental Static Regeneration</h1>
      <p className="text-gray-600">Dữ liệu được lấy lại sau mỗi 10 giây.</p>
      <p className="text-gray-600"><b>Thời gian render:</b> {now}</p>
      <ul className="divide-y divide-gray-200 bg-gray-50 rounded">
        <li key={product.id} className="py-3 px-2 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-blue-50 transition">
            <span className="font-medium">{product.name}</span>
            <span className="text-sm text-gray-500">{product.price}$</span>
          </li>
        <li className=""><b>ID:</b> {product.id}</li>
        <li className=""><b>Tên:</b> {product.name}</li>
        <li className=""><b>Giá:</b> {product.price}$</li>
        <li className=""><b>Mô tả:</b> {product.description || "Không có"}</li>
        <li className=""><b>Kho:</b> {product.stock}</li>
        <li className=""><b>Danh mục:</b> {product.category?.name}</li>
        <li><b>Nhà cung cấp:</b> {product.supplier?.name}</li>
      </ul>
      <p><i>Trang này sử dụng ISR, sẽ tự động cập nhật dữ liệu sau mỗi 10 giây nếu có thay đổi ở server.</i></p>
    </main>
  )
}