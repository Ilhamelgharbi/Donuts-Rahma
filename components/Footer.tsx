
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-950 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>🍩</span> دوناتس الرحمة
            </h3>
            <p className="text-amber-100/80 leading-relaxed mb-4">
              نقدم لكم ألذ الدوناتس الطازجة في الدار البيضاء. جودة عالية، طعم لا يقاوم، وتوصيل سريع.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-pink-400">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-pink-400 transition-colors">الرئيسية</Link></li>
              <li><Link to="/flavors" className="hover:text-pink-400 transition-colors">النكهات</Link></li>
              <li><Link to="/offers" className="hover:text-pink-400 transition-colors">العروض</Link></li>
              <li><Link to="/contact" className="hover:text-pink-400 transition-colors">اتصل بنا</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 text-pink-400">اتصل بنا</h4>
            <ul className="space-y-3 text-amber-100/80">
              <li className="flex items-center gap-2">📍 {CONTACT_INFO.location}</li>
              <li className="flex items-center gap-2">📞 {CONTACT_INFO.phone}</li>
              <li className="flex items-center gap-2">⏰ {CONTACT_INFO.hours}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-amber-900 pt-6 text-center text-sm text-amber-200/50">
          &copy; {new Date().getFullYear()} دوناتس الرحمة. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
