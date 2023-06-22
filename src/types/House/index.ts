export interface House {
  id?: number;
  newHouse: string;
  rented: string;
  selectedDate: string;
  garage: string;
  price: number;
  address: string;
  neighborhood: string;
  bathroom: number;
  rooms: number;
  area: number;
  comment: string;
  imageUrlString: string[]; // Array de URLs de imagens
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
}
