import React, { useEffect, useState } from 'react';
import HourlyCard from './HourlyCard'
type Hour = { time: string; temp: number; icon: string };

interface HourlyForecastProps {
    city: string;
}

const API_KEY = 'c9a0ca46550648b29ce125849232709';
const HourlyForecast: React.FC<HourlyForecastProps> = ({ city }) => {
    const [hours, setHours] = useState<Hour[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!city) return;

        const fetchHourly = async () => {
            try {
                setLoading(true);
                setError('');

                const res = await fetch(
                    `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}` +
                    `&q=${encodeURIComponent(city)}&days=5&aqi=no&alerts=no&lang=vi`,
                );
                if (!res.ok) throw new Error('Không tìm thấy thành phố');

                const json = await res.json();

                // Lấy danh sách giờ của HÔM NAY, và chỉ lấy 12 giờ kế tiếp
                
                const nowEpoch = Date.now() / 1000;
                const allHours = [
                    ...json.forecast.forecastday[0].hour,
                    ...json.forecast.forecastday[1].hour,
                  ];

                const next12 = allHours
                    .filter((h) => h.time_epoch >= nowEpoch)
                    .slice(0, 12)
                    .map((h) => ({
                        time: h.time.substring(11, 16),
                        temp: h.temp_c,
                        icon: `https:${h.condition.icon}`,
                    }));

                setHours(next12);
            } catch (err: any) {
                setError(err.message || 'Đã có lỗi xảy ra');
            } finally {
                setLoading(false);
            }
        };

        fetchHourly();
    }, [city]);

    return (
        <div className="mt-10 mx-4 rounded-4xl bg-white p-4 shadow-sm">
            <h3 className="mb-2 font-semibold text-slate-700">
                {loading ? 'Đang tải...' : 'Dự báo 12h tới'}
            </h3>

            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && (
                <div className="flex gap-1 overflow-x-auto scrollbar-hide">
                    {hours.map((h) => (
                        // <HourlyCard key={h.time} time={h.time} temp={h.temp} icon={h.icon} />
                        <div key={h.time} className="flex-none">
                            <HourlyCard time={h.time} temp={h.temp} icon={h.icon} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default HourlyForecast;