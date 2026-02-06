
import React from 'react';
import { Link } from 'react-router-dom';
import { Donut } from '../types';

interface DonutCardProps {
  donut: Donut;
}

const DonutCard: React.FC<DonutCardProps> = ({ donut }) => {
  return (
    <Link 
      to={`/donut/${donut.id}`}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-50 flex flex-col h-full"
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={donut.image} 
          alt={donut.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {donut.isBestSeller && (
          <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-pink-500 text-white text-[8px] sm:text-[10px] font-black px-2 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-lg z-10">
            🔥 الأكثر مبيعاً
          </div>
        )}
        {/* Overlay effect on hover */}
        <div className="absolute inset-0 bg-pink-600/0 group-hover:bg-pink-600/10 transition-colors duration-300" />
      </div>
      
      <div className="p-3 sm:p-5 text-center flex items-center justify-center flex-grow">
        <h3 className="text-base sm:text-xl font-black text-amber-950 group-hover:text-pink-600 transition-colors">
          {donut.name}
        </h3>
      </div>
    </Link>
  );
};

export default DonutCard;
