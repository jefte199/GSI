import { houseDatabaseQueries } from '../../SQL';

export const select = async () => {
  try {
    const houses = await houseDatabaseQueries.getHouses();
    return houses;
  } catch (error) {
    console.error('Error fetching houses:', error);
  }
};
