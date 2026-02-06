
export interface Donut {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  image: string;
  isBestSeller?: boolean;
  basePrice: number;
}

export interface Pack {
  count: number;
  price: number;
}

export interface CartItem {
  id: string;
  donut: Donut;
  pack: Pack;
  quantity: number;
}
