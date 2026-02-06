
import React from 'react';
import { DONUTS } from '../constants';
import DonutCard from '../components/DonutCard';

const Flavors: React.FC = () => {
  return (
    <div className="py-10 sm:py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-black text-amber-950 mb-3 sm:mb-4">قائمة النكهات 🍩</h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            استمتع بتشكيلة واسعة من الدوناتس الطازجة المحضرة يومياً بكل حب.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-12">
          {DONUTS.map(donut => (
            <DonutCard key={donut.id} donut={donut} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flavors;
