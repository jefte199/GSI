import { HouseWithId } from './house';

export declare global {
  type AppStackParamList = {
    add_imovel: undefined;
    info: { house: HouseWithId };
    update: { house: HouseWithId };
    home: { isUpdateHouses?: boolean } | undefined;
  };
}
