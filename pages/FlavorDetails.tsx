
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DONUTS, PACKS } from '../constants';
import { Pack, CartItem } from '../types';
import { ShoppingCart, Check } from 'lucide-react';

interface FlavorDetailsProps {
  onAddToCart: (item: CartItem) => void;
}

const FlavorDetails: React.FC<FlavorDetailsProps> = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const donut = DONUTS.find(d => d.id === id);
  
  const [selectedPack, setSelectedPack] = useState<Pack>(PACKS[0]);
  const [added, setAdded] = useState(false);

  if (!donut) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 text-center">
        <div>
          <p className="text-xl font-bold mb-4">عذراً، هذا المنتج غير موجود.</p>
          <button onClick={() => navigate('/flavors')} className="text-pink-600 font-bold hover:underline">العودة للنكهات</button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    onAddToCart({
      id: `${donut.id}-${selectedPack.count}`,
      donut,
      pack: selectedPack,
      quantity: 1
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Product Content */}
      <div className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            
            {/* Gallery */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                <img src={donut.image} alt={donut.name} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-square rounded-lg sm:rounded-xl overflow-hidden shadow-sm cursor-pointer border-2 border-transparent hover:border-pink-500 transition-all">
                    <img src={`https://picsum.photos/seed/d${i}${donut.id}/200/200`} alt="Detail" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <div className="mb-6 sm:mb-8">
                <h1 className="text-3xl sm:text-4xl font-black text-amber-950 mb-3 sm:mb-4">{donut.name}</h1>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {donut.description}
                </p>
              </div>

              {/* Pack Selection - Updated to Rows with Same-Row Price/Count */}
              <div className="mb-8 sm:mb-10">
                <h3 className="text-lg sm:text-xl font-bold text-amber-950 mb-4 sm:mb-6 flex items-center gap-2">
                  <span>📦</span> اختار العلبة (العدد)
                </h3>
                <div className="flex flex-col gap-3">
                  {PACKS.map(pack => (
                    <button
                      key={pack.count}
                      onClick={() => setSelectedPack(pack)}
                      className={`relative w-full p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between ${
                        selectedPack.count === pack.count 
                          ? 'border-pink-600 bg-pink-50 ring-2 ring-pink-50' 
                          : 'border-gray-100 bg-gray-50 hover:border-pink-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {selectedPack.count === pack.count ? (
                          <div className="bg-pink-600 text-white rounded-full p-1">
                            <Check size={16} />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-gray-200" />
                        )}
                        <span className="text-lg sm:text-xl font-bold text-amber-950">{pack.count} حبات</span>
                      </div>
                      <span className="text-xl sm:text-2xl font-black text-pink-600">{pack.price} درهم</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-auto flex flex-col gap-3 sm:gap-4">
                <div className="flex justify-between items-center bg-gray-100/50 p-5 sm:p-6 rounded-2xl border border-gray-100">
                  <span className="text-gray-600 font-bold text-base sm:text-lg">المجموع:</span>
                  <div className="text-right">
                    <span className="text-3xl sm:text-4xl font-black text-amber-950 leading-none">{selectedPack.price}</span>
                    <span className="text-amber-950 font-bold mr-1">درهم</span>
                  </div>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  disabled={added}
                  className={`flex items-center justify-center gap-2 sm:gap-3 py-5 sm:py-6 rounded-full text-xl sm:text-2xl font-black transition-all shadow-xl active:scale-95 ${
                    added 
                      ? 'bg-green-500 text-white' 
                      : 'bg-pink-600 hover:bg-pink-700 text-white hover:shadow-pink-200'
                  }`}
                >
                  {added ? (
                    <>
                      <Check size={24} />
                      <span>تمت الإضافة!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={24} />
                      <span>أضف إلى السلة</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Flavors - Dark Mode Theme */}
      <div className="bg-amber-950 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black mb-8 sm:mb-10 text-white text-center">نكهات مشابهة قد تعجبك 🍩</h2>
          <div className="flex overflow-x-auto pb-4 gap-4 sm:gap-6 no-scrollbar">
            {DONUTS.filter(d => d.id !== donut.id).slice(0, 6).map(d => (
              <div 
                key={d.id} 
                className="min-w-[160px] sm:min-w-[240px] group cursor-pointer"
                onClick={() => navigate(`/donut/${d.id}`)}
              >
                <div className="bg-white/5 rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden hover:border-pink-500/50 transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img src={d.image} alt={d.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                  </div>
                  <div className="p-3 sm:p-4 text-center">
                    <h4 className="font-bold text-sm sm:text-base text-white line-clamp-1">{d.name}</h4>
                    <p className="text-pink-400 font-bold text-[10px] sm:text-sm mt-1 sm:mt-2">شوف التفاصيل</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlavorDetails;
