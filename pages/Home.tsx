
import React from 'react';
import { Link } from 'react-router-dom';
import { DONUTS, PACKS } from '../constants';
import DonutCard from '../components/DonutCard';
import { ArrowLeft } from 'lucide-react';

const Home: React.FC = () => {
  const bestSellers = DONUTS.filter(d => d.isBestSeller).slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-pink-50 py-10 sm:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-pink-200/30 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-80 sm:h-80 bg-amber-200/20 rounded-full -ml-24 -mb-24 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-6xl font-black text-amber-950 mb-4 sm:mb-6 leading-tight">
              دوناتس طازجة… <span className="text-pink-600 italic">لذيذة…</span> معمّرة
            </h1>
            <p className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-10 font-medium">
              اطلب دوناتس بنكهتك المفضلة وبالعدد اللي بغيتي، مباشرة لدارك!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <Link 
                to="/flavors" 
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold text-base sm:text-lg px-8 py-3.5 sm:px-10 sm:py-4 rounded-full shadow-lg shadow-pink-200 transition-all transform hover:-translate-y-1 active:scale-95 text-center"
              >
                شوف النكهات
              </Link>
              <Link 
                to="/flavors" 
                className="bg-white hover:bg-gray-50 text-amber-950 font-bold text-base sm:text-lg px-8 py-3.5 sm:px-10 sm:py-4 rounded-full border-2 border-amber-950/10 transition-all text-center"
              >
                اطلب دابا
              </Link>
            </div>
          </div>
          
          <div className="mt-10 sm:mt-16 relative">
            <img 
              src="https://picsum.photos/seed/hero-donut/800/400" 
              alt="Delicious Donuts" 
              className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl mx-auto max-w-full h-auto object-cover max-h-[250px] sm:max-h-none"
            />
          </div>
        </div>
      </section>

      {/* Popular Donuts */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-amber-950 mb-3 sm:mb-4">الأكثر طلباً ⭐</h2>
            <div className="w-12 sm:w-20 h-1 sm:h-1.5 bg-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
            {bestSellers.map(donut => (
              <DonutCard key={donut.id} donut={donut} />
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section - Updated to Menu Style */}
      <section className="py-16 sm:py-24 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-amber-950 mb-3 flex items-center justify-center gap-3">
              <span>باكات التوفير</span>
              <span className="text-4xl">📦</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-medium">اختار العلبة اللي كتناسبك وبالثمن اللي كيريحك</p>
          </div>
          
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 shadow-2xl border border-amber-100/50 relative">
            {/* Top Donut Decoration */}
            <div className="absolute -top-6 -right-6 text-5xl transform rotate-12 hidden sm:block">🍩</div>
            
            <div className="flex flex-col gap-8 sm:gap-10">
              {PACKS.map(pack => (
                <div key={pack.count} className="flex items-end group">
                  <span className="text-xl sm:text-3xl font-black text-amber-950 whitespace-nowrap">{pack.count} حبات</span>
                  <div className="flex-grow border-b-2 border-dotted border-amber-200/60 mx-3 sm:mx-6 mb-2 group-hover:border-pink-300 transition-colors"></div>
                  <div className="text-left flex flex-col items-end">
                    <span className="text-2xl sm:text-4xl font-black text-pink-600 whitespace-nowrap">{pack.price} <span className="text-sm sm:text-lg font-bold">درهم</span></span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-14 text-center">
              <Link 
                to="/flavors" 
                className="inline-flex items-center gap-3 bg-pink-600 text-white font-black text-lg sm:text-xl px-12 py-5 rounded-full shadow-xl shadow-pink-200/50 hover:bg-pink-700 hover:shadow-pink-300/50 transition-all active:scale-95"
              >
                <span>اختار النكهة دابا</span>
                <ArrowLeft size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Gallery */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <img src="https://picsum.photos/seed/g1/400/400" className="rounded-xl sm:rounded-2xl shadow-sm w-full aspect-square object-cover" alt="Gallery" />
            <img src="https://picsum.photos/seed/g2/400/400" className="rounded-xl sm:rounded-2xl shadow-sm w-full aspect-square object-cover" alt="Gallery" />
            <img src="https://picsum.photos/seed/g3/400/400" className="rounded-xl sm:rounded-2xl shadow-sm w-full aspect-square object-cover" alt="Gallery" />
            <img src="https://picsum.photos/seed/g4/400/400" className="rounded-xl sm:rounded-2xl shadow-sm w-full aspect-square object-cover" alt="Gallery" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-pink-600">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl sm:text-5xl font-black mb-4 sm:mb-6 leading-tight">جاهز تطلب؟ 🍩</h2>
          <p className="text-base sm:text-xl mb-8 sm:mb-10 text-pink-100">طلبك يوصل مباشرة على واتساب، الدفع عند التوصيل.</p>
          <Link 
            to="/flavors" 
            className="bg-white text-pink-600 font-black text-lg sm:text-xl px-10 py-4 sm:px-12 sm:py-5 rounded-full shadow-xl hover:bg-pink-50 transition-all inline-block active:scale-95"
          >
            اطلب الآن
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
