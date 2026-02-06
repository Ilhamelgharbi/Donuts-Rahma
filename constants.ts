
import { Donut, Pack } from './types';

export const DONUTS: Donut[] = [
  {
    id: 'classic-sugar',
    name: 'سكر كلاسيك',
    nameEn: 'Classic Sugar',
    description: 'دوناتس هشة مغطاة بطبقة من السكر الناعم لتجربة كلاسيكية لا تقاوم.',
    image: 'https://picsum.photos/seed/donut1/600/600',
    isBestSeller: true,
    basePrice: 15
  },
  {
    id: 'chocolate-glaze',
    name: 'شوكولاتة',
    nameEn: 'Chocolate',
    description: 'عشاق الشوكولاتة؟ هذه الدوناتس مغطاة بأجود أنواع الشوكولاتة الداكنة.',
    image: 'https://picsum.photos/seed/donut2/600/600',
    isBestSeller: true,
    basePrice: 15
  },
  {
    id: 'nutella-filling',
    name: 'نوتيلا',
    nameEn: 'Nutella',
    description: 'محشوة بكريمة النوتيلا الغنية ومزينة بلمسات فنية.',
    image: 'https://picsum.photos/seed/donut3/600/600',
    isBestSeller: true,
    basePrice: 15
  },
  {
    id: 'cinnamon-roll',
    name: 'قرفة',
    nameEn: 'Cinnamon',
    description: 'مزيج القرفة والسكر يمنحك شعوراً بالدفء واللذة في كل قضمة.',
    image: 'https://picsum.photos/seed/donut4/600/600',
    basePrice: 15
  },
  {
    id: 'vanilla-dream',
    name: 'فانيلا',
    nameEn: 'Vanilla',
    description: 'فانيلا طبيعية مع طبقة بيضاء ناعمة تذوب في الفم.',
    image: 'https://picsum.photos/seed/donut5/600/600',
    basePrice: 15
  },
  {
    id: 'condensed-milk',
    name: 'حليب مكثف',
    nameEn: 'Condensed Milk',
    description: 'لمسة من الحليب المكثف المحلى لمذاق فريد ومميز.',
    image: 'https://picsum.photos/seed/donut6/600/600',
    basePrice: 15
  }
];

export const PACKS: Pack[] = [
  { count: 10, price: 15 },
  { count: 20, price: 30 },
  { count: 40, price: 60 },
  { count: 60, price: 90 }
];

export const CONTACT_INFO = {
  location: 'الرحمة – الدار البيضاء',
  phone: '+212 600 000000',
  whatsapp: '212600000000',
  hours: '10:00 صباحاً - 10:00 مساءً',
};
