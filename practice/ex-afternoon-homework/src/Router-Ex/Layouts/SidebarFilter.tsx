import {useState, useEffect} from 'react'

export interface Category {
    id: number;
    name: string;
}

type Props = {
    onSelected: (id:number | null) => void;
    selectedId: number | null;
}
export default function SidebarFilter({onSelected, selectedId}: Props) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      (async () => {
        setLoading(true);
        try {
          const res = await fetch("https://api.escuelajs.co/api/v1/categories");
          const data: Category[] = await res.json();
          setCategories(data);
        } finally {
          setLoading(false);
        }
      })();
    }, [onSelected]);
  
    return(
        <aside className="w-full md:w-56 lg:w-64 shrink-0 pr-4 border-r ml-3">
 <h3 className="font-semibold mb-3">Bộ lọc</h3>
      {loading && <p>Loading...</p>}
      <ul className="space-y-2">
        {categories.map((c) => {
            const isSelected = selectedId === c.id;
            return(
            
                <li key={c.id} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="category"
                    id={`cat-${c.id}`}
                    checked={selectedId === c.id}
                    onChange={() => onSelected(selectedId === c.id ? null : c.id)}
                    className="accent-orange-600"
                  />
                  <label htmlFor={`cat-${c.id}`} className={`cursor-pointer select-none transition-colors duration-200 ${
                        isSelected ? 'text-red-600 font-semibold' : 'hover:text-red-600'
                      }`}>
                    {c.name}
                  </label>
                </li>
              )
        }
        )}
      </ul>
        </aside>
    )
}