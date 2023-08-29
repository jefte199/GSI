import { House } from '../../types/house';

import { houseDatabaseQueries } from '../../SQL';

export const createHouse = async (house: House) => {
  try {
    await houseDatabaseQueries.createHouse(house);
    console.log('created house with success.');
  } catch (error) {
    console.log(error);
  }
};
