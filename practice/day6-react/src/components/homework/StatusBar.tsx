import React, { useEffect, useState } from 'react';
import { Signal, Wifi, BatteryFull } from 'lucide-react';

const StatusBar: React.FC = () => {
    const [time, setTime] = useState(() =>
        new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    );
    useEffect(() => {
        const id = setInterval(() => {
            setTime(
              new Date().toLocaleTimeString('vi-VN', {
                hour: '2-digit',
                minute: '2-digit',
              }),
            );
          }, 60 * 1000);
        return () => clearInterval(id);
    }, []);
    return (
        <div className="flex justify-between items-center px-4 py-1 text-white">
        
          <span className="font-medium">{time}</span>
    
          
          <div className="flex items-center gap-1">
            <Signal className="h-5 w-5" strokeWidth={2} />
            <Wifi className="h-5 w-5" strokeWidth={2} />
            <BatteryFull className="h-5 w-5" strokeWidth={2} />
          </div>
        </div>
      );
    

}
export default StatusBar;