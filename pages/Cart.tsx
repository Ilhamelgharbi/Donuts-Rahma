
import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';
import { CONTACT_INFO } from '../constants';
import { Trash2, Plus, Minus, MessageCircle } from 'lucide-react';

interface CartProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemove, onUpdateQuantity }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.pack.price * item.quantity), 0);

  const handleOrder = () => {
    const orderDetails = items.map(item => 
      `🍩 ${item.donut.name} - علبة ${item.pack.count} حبات (${item.quantity}x)`
    ).join('\n');
    
    const message = encodeURIComponent(
      `مرحباً دوناتس الرحمة! 👋\n\nأود طلب الآتي:\n${orderDetails}\n\nالمجموع الكلي: ${subtotal} درهم\nالدفع عند التوصيل 📍`
    );
    
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${message}`, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <span className="text-8xl mb-6 opacity-30">🛒</span>
        <h2 className="text-3xl font-black text-amber-950 mb-4">السلة فارغة حالياً</h2>
        <p className="text-gray-500 mb-10 max-w-sm">
          لم تضف أي دوناتس إلى سلتك بعد. استكشف نكهاتنا المميزة وابدأ طلبك!
        </p>
        <Link 
          to="/flavors" 
          className="bg-pink-600 text-white font-black px-10 py-4 rounded-full shadow-lg"
        >
          اكتشف النكهات
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-amber-950 mb-10 text-center">سلة المشتريات 🛒</h1>

        <div className="grid grid-cols-1 gap-6 mb-12">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center gap-6">
              <img 
                src={item.donut.image} 
                alt={item.donut.name} 
                className="w-24 h-24 rounded-2xl object-cover shadow-sm"
              />
              
              <div className="flex-grow text-center sm:text-right">
                <h3 className="text-xl font-bold text-amber-950">{item.donut.name}</h3>
                <p className="text-gray-500 text-sm">علبة {item.pack.count} حبات</p>
                <p className="text-pink-600 font-bold mt-1">{item.pack.price} درهم</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                  <button 
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="p-1 text-gray-500 hover:text-pink-600 transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-8 text-center font-bold text-lg">{item.quantity}</span>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="p-1 text-gray-500 hover:text-pink-600 transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>

                <button 
                  onClick={() => onRemove(item.id)}
                  className="p-3 bg-red-50 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100">
          <h2 className="text-2xl font-black text-amber-950 mb-6">ملخص الطلب</h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-gray-600">
              <span>المجموع الفرعي</span>
              <span>{subtotal} درهم</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>توصيل</span>
              <span className="text-green-600 font-bold">حدد لاحقاً</span>
            </div>
            <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
              <span className="text-xl font-bold text-amber-950">الإجمالي</span>
              <span className="text-3xl font-black text-pink-600">{subtotal} درهم</span>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center">الدفع عند التوصيل لجميع الطلبات</p>
          </div>

          <button
            onClick={handleOrder}
            className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-5 rounded-full text-xl font-black shadow-lg shadow-green-100 transition-all transform hover:scale-[1.02]"
          >
            <MessageCircle size={28} fill="currentColor" />
            <span>أرسل الطلب على واتساب</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
