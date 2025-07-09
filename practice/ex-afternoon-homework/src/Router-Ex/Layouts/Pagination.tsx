interface Props {
    current: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}
export default function Pagination({ current, totalPages, onPageChange }: Props) {
    if (totalPages <= 1) return null;
    return (
        <div className="flex gap-1 mt-6">
            {Array.from({ length: totalPages }).map((_, idx: number) => {
                const page = idx + 1;
                return (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={` w-8 h-8 border rounded flex items-center justify-center text-sm ${current === page
                                ? "bg-red-400 text-white"
                                : "hover:bg-gray-100"
                            }`}
                    >
                        {page}
                    </button>
                );
            })}
        </div>
    )
}