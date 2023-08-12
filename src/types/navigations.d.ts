import { House } from './House';

export declare global {
  type AppStackParamList = {
    home: undefined;
    add_imovel: undefined;
    info: { home: House | undefined };
  };
}
