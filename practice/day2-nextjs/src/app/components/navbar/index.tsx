import { User, ShoppingCart, MapPin, ChevronRight, Search, Smartphone, Laptop,ChevronDown, Headphones, Watch, Tablet, CardSim, Settings, Clock, DollarSign, Monitor } from "lucide-react";
export default function Navbar() {
    return (
        <div className="w-full">
            <div className="w-full bg-[#85E3FF]"> <img className="flex mx-auto" src="https://cdnv2.tgdd.vn/mwg-static/tgdd/Banner/bd/26/bd260331dfc577627b0c955e027cdaba.png" alt="" /></div>
            <div className="w-full bg-yellow-400">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex items-center justify-center py-2 px-4 gap-4">
                        {/* Logo + Search */}
                        <div className="flex items-center gap-4 flex-1">
                            <div className="flex items-center gap-2">
                                <div className="bg-black rounded-full p-2">
                                    <span className="text-yellow-400 font-bold">⚡</span>
                                </div>
                                <span className="font-bold text-lg">thegioididong.com</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 w-[450px]">
                                <Search size={18} className="text-gray-500" />
                                <input
                                    type="text"
                                    placeholder="Bạn tìm gì..."
                                    className="flex-1  px-4 rounded-full focus:outline-none bg-white placeholder:text-gray-500"
                                />
                            </div>
                        </div>

                        <button className="flex items-center gap-2">
                            <User size={18} /> Đăng nhập
                        </button>
                        <button className="flex items-center gap-2">
                            <ShoppingCart size={18} /> Giỏ hàng
                        </button>
                        <button className="flex items-center gap-2 bg-yellow-300 rounded-full px-4 py-2 hover:bg-yellow-200 justify-between w-60 ">
                            <div className="flex items-center gap-2"><MapPin size={18} /> Hồ Chí Minh</div> <ChevronRight size={14} />
                        </button>
                    </div>
                    <nav className="bg-yellow-400 border-yellow-300">
                        <div className="max-w-7xl mx-auto flex items-center gap-4 py-2 px-4 overflow-x-auto justify-between">
                            <a href="#" className="flex items-center gap-1 text-sm whitespace-nowrap"><Smartphone size={18} className="text-gray" /> Điện thoại</a>
                            <a href="#" className="flex items-center gap-1 text-sm whitespace-nowrap"><Laptop size={18} className="text-gray" /> Laptop</a>
                            <a href="#" className="flex items-center gap-1 text-sm whitespace-nowrap"><Headphones size={18} className="text-gray" /> Phụ kiện <ChevronDown size={14} className="text-gray" /></a>
                            <a href="#" className="flex items-center gap-1 text-sm whitespace-nowrap"><Watch size={18} className="text-gray" /> Smartwatch</a>
                            <a href="#" className="flex items-center gap-1 text-sm whitespace-nowrap"><Clock size={18} className="text-gray" /> Đồng hồ</a>
                            <a href="#" className="flex items-center gap-1 text-sm whitespace-nowrap"><Tablet size={18} className="text-gray" /> Tablet</a>
                            <a href="#" className="flex items-center gap-1 text-sm whitespace-nowrap"><Smartphone size={18} className="text-gray" /> Máy cũ, Thu cũ <ChevronDown size={14} className="text-gray" /></a>
                            <a href="#" className="flex items-center gap-1 text-sm whitespace-nowrap"><Monitor size={18} className="text-gray" /> Màn hình, Máy in <ChevronDown size={14} className="text-gray" /></a>
                            <a href="#" className="flex items-center gap-1 text-sm whitespace-nowrap"><CardSim size={18} className="text-gray" /> Sim, Thẻ cào <ChevronDown size={14} className="text-gray" /></a>
                            <a href="#" className="flex items-center gap-1 text-sm whitespace-nowrap"><Settings size={18} className="text-gray" /> Dịch vụ tiện ích <ChevronDown size={14} className="text-gray" /></a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}