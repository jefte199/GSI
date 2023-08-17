import { houseDatabaseQueries } from '../../SQL';

export const createTable = async () => {
  try {
    await houseDatabaseQueries.createTable();
  } catch (error) {
    console.error('Error creating table:', error);
  }
};
