const products = [
  { id: 1, name: "Áo thun NextJS", price: "199.000đ", img: "/file.svg" },
  { id: 2, name: "Cốc lập trình", price: "99.000đ", img: "/globe.svg" },
  { id: 3, name: "Sticker React", price: "29.000đ", img: "/next.svg" },
];

export default function Products() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">Sản phẩm nổi bật</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div key={p.id} className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center">
            <img src={p.img} alt={p.name} className="w-20 h-20 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
            <span className="text-blue-600 font-bold mb-2">{p.price}</span>
            <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Mua ngay</button>
          </div>
        ))}
      </div>
    </div>
  );
}