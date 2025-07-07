import React, { useEffect, useState } from 'react';

type DetailData = { humidity: number; windSpeed: number };

interface WeatherDetailCardProps {
    /** Thành phố được chọn trong ô tìm kiếm */
    city: string;
  }

const API_KEY = 'c9a0ca46550648b29ce125849232709';
const WeatherDetailCard: React.FC<WeatherDetailCardProps> = ({ city }) => {
    const [data, setData] = useState<DetailData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    useEffect(() => {
        if (!city) return;
    
        const fetchDetails = async () => {
          try {
            setLoading(true);
            setError('');
            const res = await fetch(
              `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}` +
                `&q=${encodeURIComponent(city)}&days=1&aqi=no&alerts=no&lang=vi`,
            );
    
            if (!res.ok) throw new Error('Không tìm thấy thành phố');
    
            const json = await res.json();
    
            setData({
              // dùng dữ liệu ngay tại phần "current"
              humidity: json.current?.humidity,
              windSpeed: json.current?.wind_kph,
            });
          } catch (err: any) {
            setError(err.message || 'Đã có lỗi xảy ra');
          } finally {
            setLoading(false);
          }
        };
    
        fetchDetails();
      }, [city]);
    
      /* ---------- UI ---------- */
      if (loading) return <p className="text-white ml-4">Đang tải...</p>;
      if (error) return <p className="text-red-200 ml-4">{error}</p>;
      if (!data) return null;
    
      return (
        <div className="mt-5 mx-4 rounded-3xl bg-white/40 p-4 text-center backdrop-blur-md text-slate-800 grid grid-cols-2 divide-x divide-slate-300/60">
          <div>
            <p className="text-sm tracking-wider uppercase text-slate-600 ">
              Humidity
            </p>
            <p className="mt-1 text-2xl font-semibold">{data.humidity}%</p>
          </div>
          <div>
            <p className="text-sm tracking-wider uppercase text-slate-600">
              Wind Speed
            </p>
            <p className="mt-1 text-2xl font-semibold">
              {data.windSpeed.toFixed(1)} km/h
            </p>
          </div>
        </div>
      );
    };
    
    export default WeatherDetailCard;