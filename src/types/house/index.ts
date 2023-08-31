export interface HouseBase {
  area: number;
  price: number;
  rooms: number;
  garage: number;
  rented: string;
  address: string;
  comment: string;
  newHouse: string;
  bathroom: number;
  typeHouse: string;
  imageUrls: string[];
  contactName: string;
  neighborhood: string;
  contactEmail: string;
  contactPhone: string;
  selectedDate?: string;
  contactAddress: string;
}

export interface House extends HouseBase {}

export interface HouseWithId extends HouseBase {
  id: number;
}
