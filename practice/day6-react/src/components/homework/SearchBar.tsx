import React from 'react'
import { Search } from 'lucide-react';



interface SearchBarProps {
    placeholder?: string;
    
    onSubmit: (keyword: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({  placeholder = 'Da nang',
    onSubmit, }) => {
        const [value, setValue] = React.useState('');
        const handleSubmit = (e: React.FormEvent)=>{
            e.preventDefault();
            if(!value.trim()) return;
            onSubmit(value.trim());
        }
    return (
        <div className='w-full h-18'>
            <form onSubmit={handleSubmit} className="w-full h-full p-4">
                <div className="flex items-center gap-2 rounded-full bg-white/40 px-4 py-4 backdrop-blur-md">
                    <Search className="h-8 w-7 text-slate-600 " />
                    <input
                        className="flex-1 bg-transparent text-slate-700 placeholder:text-slate-500 focus:outline-none text-xl px-2"
                        placeholder={placeholder}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}
export default SearchBar;