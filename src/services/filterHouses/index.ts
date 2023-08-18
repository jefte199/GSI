import { houseDatabaseQueries } from '../../SQL';

import { PropertySearchFilters } from '../../types/propertySearchFilters';

export const filterHouses = async (options: PropertySearchFilters) => {
  try {
    const filteredHouses = await houseDatabaseQueries.filterHouses(options);
    return filteredHouses;
  } catch (error) {
    console.error('Error fetching houses:', error);
  }
};
