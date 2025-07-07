import React, { useEffect, useState } from 'react';
import { Sun } from 'lucide-react';

type WeatherData = {
  temp: number;
  text: string;
  icon: string;
};

interface CurrentWeatherProps {
  /** Tên thành phố cần hiển thị */
  city: string;
}

const API_KEY = 'c9a0ca46550648b29ce125849232709';

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ city }) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError('');
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(
            city,
          )}&aqi=no&lang=vi`,
        );

        if (!res.ok) throw new Error('Không tìm thấy thành phố');

        const json = await res.json();
        setData({
          temp: json.current?.temp_c,
          text: json.current?.condition?.text,
          icon: `https:${json.current?.condition?.icon}`,
        });
      } catch (err: any) {
        setError(err.message || 'Đã có lỗi xảy ra');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) return <p className="text-white">Đang tải...</p>;
  if (error) return <p className="text-red-200">{error}</p>;
  if (!data) return null;

  return (
    <div className="flex items-center justify-evenly py-6 mt-4">
      <div>
        <h1 className="text-7xl font-bold text-white leading-none">
          {Math.round(data.temp)}°
        </h1>
        <p className="text-xl text-white/90">{data.text}</p>
      </div>

      {/* Nếu API trả icon => dùng <img>, nếu không thì fallback icon Sun */}
      {data.icon ? (
        <img
          src={data.icon}
          alt={data.text}
          className="h-30 w-30 drop-shadow-md"
        />
      ) : (
        <Sun className="h-20 w-20 text-yellow-400 drop-shadow-md" strokeWidth={1.5} />
      )}
    </div>
  );
};

export default CurrentWeather;

