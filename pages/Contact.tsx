
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-black text-amber-950 mb-4">تواصل معنا 👋</h1>
          <p className="text-gray-600 text-lg">نحن هنا للإجابة على جميع تساؤلاتكم وتلقي طلباتكم.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Fix: Passed size={32} directly to the icon components to avoid using cloneElement */}
          <ContactCard 
            icon={<MapPin className="text-pink-600" size={32} />} 
            title="موقعنا" 
            text={CONTACT_INFO.location} 
          />
          <ContactCard 
            icon={<Phone className="text-pink-600" size={32} />} 
            title="رقم الهاتف" 
            text={CONTACT_INFO.phone} 
          />
          <ContactCard 
            icon={<Clock className="text-pink-600" size={32} />} 
            title="ساعات العمل" 
            text={CONTACT_INFO.hours} 
          />
          <div className="bg-pink-50 p-8 rounded-3xl flex flex-col items-center justify-center text-center">
             <MessageCircle className="text-pink-600 mb-4" size={40} fill="currentColor" />
             <h3 className="text-xl font-bold mb-4">اطلب الآن عبر واتساب</h3>
             <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
              target="_blank" 
              rel="noreferrer"
              className="bg-pink-600 text-white font-bold px-8 py-3 rounded-full hover:bg-pink-700 transition-colors"
             >
              بدء المحادثة
             </a>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 aspect-video w-full bg-gray-100 flex items-center justify-center">
          <div className="text-center p-8">
            <MapPin size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 font-bold">خريطة الموقع (الرحمة، الدار البيضاء)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Fix: Removed React.cloneElement which caused a TypeScript error because 'size' property 
// was not recognized on the cast React.ReactElement type.
const ContactCard: React.FC<{icon: React.ReactNode, title: string, text: string}> = ({ icon, title, text }) => (
  <div className="bg-gray-50 p-8 rounded-3xl flex flex-col items-center text-center">
    <div className="mb-4 bg-white p-4 rounded-full shadow-sm">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-amber-950 mb-2">{title}</h3>
    <p className="text-gray-600 font-medium">{text}</p>
  </div>
);

export default Contact;
