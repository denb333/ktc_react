import type { Product } from "../Pages/ProductPage";

type Props = {
    products: Product[];
};
export default function ProductGrid({ products }: Props) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md flex flex-col justify-between m-3">
                    <img src={product.images[0]} alt={product.title} className="object-contain h-40 w-full mb-3" />
                    <h4 className="font-medium line-clamp-2 mb-1 mx-2">{product.title}</h4>
                    
                    <p className="text-orange-600 font-semibold mb-2 ml-2 text-red-500">
                        {product.price*25000} đ
                    </p>
                </div>
            ))}
        </div>
    )
}