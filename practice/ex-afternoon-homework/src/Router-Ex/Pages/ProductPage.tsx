import { useEffect, useState } from "react";
import SidebarFilter from "../Layouts/SidebarFilter";
import ProductGrid from "../Layouts/ProductGrid";
import Pagination from "../Layouts/Pagination";

export interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
}
const LIMIT = 8;
export default function ProductPage() {
    const [selectedCat, setSelectedCat] = useState<number | null>(null);
    const [products, setProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
       

        (async () => {
            setLoading(true);
            try {

                const offset = (page - 1) * LIMIT;

                // Xác định URL tuỳ vào việc có chọn danh mục hay không
                const baseUrl = selectedCat === null
                  ? `https://api.escuelajs.co/api/v1/products`
                  : `https://api.escuelajs.co/api/v1/categories/${selectedCat}/products`;
        
                // Lấy tổng số sản phẩm để tính trang
                const allRes = await fetch(baseUrl);
                const allData: Product[] = await allRes.json();
                setTotal(allData.length);
        
                // Lấy trang hiện tại
                const pageRes = await fetch(`${baseUrl}?offset=${offset}&limit=${LIMIT}`);
                const pageData: Product[] = await pageRes.json();
                setProducts(pageData);
            } finally {
                setLoading(false);
            }
        })();
    }, [selectedCat, page]);

    const totalPages = Math.ceil(total / LIMIT);

    return (
        <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <SidebarFilter selectedId={selectedCat} onSelected={(id: number | null) => { setPage(1); setSelectedCat(id); }} />

            <div className="flex-1">
                
                {loading && <p>Đang tải...</p>}
                <ProductGrid products={products} />
                <Pagination
                    current={page}
                    totalPages={totalPages}
                    onPageChange={(p: number) => setPage(p)}
                />
            </div>
        </div>
    );
}