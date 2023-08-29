import { HouseWithId } from '../../types/house';

import { houseDatabaseQueries } from '../../SQL';

export const updateHouse = async (house: HouseWithId) => {
  try {
    await houseDatabaseQueries.updateHouse(house);
    console.log('updated house with success.');
  } catch (error) {
    console.log(error);
  }
};
