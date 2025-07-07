// src/components/HourlyCard.tsx
import React from 'react';

interface HourlyCardProps {
  time: string;      
  temp: number;      
  icon: string;      
}

const HourlyCard: React.FC<HourlyCardProps> = ({ time, temp, icon }) => (
  <div className="flex flex-col items-center gap-1 w-16">
    <img src={icon} alt="" className="h-6 w-6 drop-shadow-md" />
    <span className="text-slate-900 font-medium">{Math.round(temp)}°</span>
    <span className="text-xs text-slate-600">{time}</span>
  </div>
);

export default HourlyCard;
