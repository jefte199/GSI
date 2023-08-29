import { db } from '../database';

import { House, HouseWithId } from '../types/house';

import { PropertySearchFilters } from '../types/propertySearchFilters';

import { convertStringForObject } from '../utils/convertStringForObject';

async function executeQuery(query: string, params: any[] = []): Promise<any> {
  return new Promise((resolve, reject) => {
    db.transaction((transaction) => {
      transaction.executeSql(
        query,
        params,
        (_, result) => resolve(result),
        (_, error) => {
          reject(error);
          return !!error;
        }
      );
    });
  });
}

export const houseDatabaseQueries = {
  createTable: async () => {
    const query = `
      CREATE TABLE IF NOT EXISTS houses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        rented TEXT,
        area INTEGER,
        address TEXT,
        comment TEXT,
        newHouse TEXT,
        price INTEGER,
        rooms INTEGER,
        imageUrls TEXT,
        garage INTEGER,
        bathroom INTEGER,
        contactName TEXT,
        contactEmail TEXT,
        neighborhood TEXT,
        contactPhone TEXT,
        selectedDate TEXT,
        contactAddress TEXT
      );
    `;

    await executeQuery(query);
  },

  createHouse: async (house: House) => {
    const query = `
      INSERT INTO houses (
        area, price, rooms, garage, rented, comment, 
        address, newHouse, bathroom, contactName, neighborhood,
        selectedDate, contactEmail, contactPhone, contactAddress,
        imageUrls
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    const params = [
      house.area,
      house.price,
      house.rooms,
      house.garage,
      house.rented,
      house.comment,
      house.address,
      house.newHouse,
      house.bathroom,
      house.contactName,
      house.neighborhood,
      house.selectedDate,
      house.contactEmail,
      house.contactPhone,
      house.contactAddress,
      JSON.stringify(house.imageUrls),
    ];

    const result = await executeQuery(query, params);

    if (result.rowsAffected > 0) return result.insertId;

    throw new Error('Failed to insert house');
  },

  updateHouse: async (house: HouseWithId) => {
    const query = `
      UPDATE houses
      SET
        area = ?,
        price = ?,
        rooms = ?,
        garage = ?,
        rented = ?,
        comment = ?,
        address = ?,
        newHouse = ?,
        bathroom = ?,
        contactName = ?,
        neighborhood = ?,
        selectedDate = ?,
        contactEmail = ?,
        contactPhone = ?,
        contactAddress = ?,
        imageUrls = ?
      WHERE id = ?;
    `;

    const params = [
      house.area,
      house.price,
      house.rooms,
      house.garage,
      house.rented,
      house.comment,
      house.address,
      house.newHouse,
      house.bathroom,
      house.contactName,
      house.neighborhood,
      house.selectedDate,
      house.contactEmail,
      house.contactPhone,
      house.contactAddress,
      JSON.stringify(house.imageUrls),
      house.id,
    ];

    const result = await executeQuery(query, params);

    if (result.rowsAffected > 0) return true;

    throw new Error('Failed to update house');
  },

  filterHouses: async (options: PropertySearchFilters) => {
    const query = `
    SELECT * FROM houses
    WHERE
      (area <= ? AND ? > 0) OR
      (price <= ? AND ? > 0) OR
      rooms = ? OR
      garage = ? OR
      rented = ? OR
      address = ? OR
      newHouse = ? OR
      bathroom = ? OR
      neighborhood = ?
  `;

    const params = [
      options.area,
      options.area,
      options.price,
      options.price,
      options.rooms,
      options.garage,
      options.rented,
      options.address,
      options.newHouse,
      options.bathroom,
      options.neighborhood,
    ];

    const result = await executeQuery(query, params);

    const houseList: HouseWithId[] = [];

    for (let index = 0; index < result.rows.length; index++) {
      houseList.push(result.rows.item(index) as HouseWithId);
    }

    return houseList;
  },

  getHouseById: async (houseId: number): Promise<HouseWithId> => {
    const query = 'SELECT * FROM houses WHERE id = ?;';
    const params = [houseId];

    const result = await executeQuery(query, params);

    if (result.rows.length === 0) throw new Error('House not found');

    const house = result.rows.item(0);
    const imageUrls = convertStringForObject(house.imageUrls);

    return { ...house, imageUrls };
  },

  getHouses: async (): Promise<HouseWithId[]> => {
    const query = 'SELECT * FROM houses;';
    const result = await executeQuery(query);

    const houseList: HouseWithId[] = [];

    for (let index = 0; index < result.rows.length; index++) {
      const house = result.rows.item(index);
      const imageUrls = convertStringForObject(house.imageUrls);

      houseList.push({ ...house, imageUrls });
    }

    return houseList;
  },

  deleteHouse: async (id: number) => {
    const query = 'DELETE FROM houses WHERE id = ?;';
    const params = [id];

    const result = await executeQuery(query, params);

    if (result.rowsAffected > 0) return;

    throw new Error('House not found');
  },
};
