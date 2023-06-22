import { db } from '../database';
import { House } from '../types/House';

export const sql = {
  createTable: () => {
    return new Promise((resolve, reject) => {
      db.transaction((transaction) => {
        transaction.executeSql(
          `CREATE TABLE IF NOT EXISTS houses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            newHouse TEXT,
            rented TEXT,
            selectedDate TEXT,
            garage TEXT,
            price INTEGER,
            address TEXT,
            neighborhood TEXT,
            bathroom INTEGER,
            rooms INTEGER,
            area INTEGER,
            comment TEXT,
            imageURLs TEXT,
            contactName TEXT,
            contactEmail TEXT,
            contactPhone TEXT,
            contactAddress TEXT
          );
          `, [],
          (_, result) => {
            console.log('Table created successfully');
          },
          (_, error) => {
            console.log('Error creating table:', error);
          }
        );
      });
    });
  },

  createHouse: ({
    newHouse, rented, selectedDate, garage, price, address, neighborhood, bathroom,
    rooms, area, comment, imageUrlString, contactName, contactEmail, contactPhone, contactAddress, }: House) => {
    return new Promise((resolve, reject) => {
      db.transaction((transaction) => {
        transaction.executeSql(
          `INSERT INTO houses (
            newHouse, rented, selectedDate, garage, price, address, neighborhood,
            bathroom, rooms, area, comment, imageUrls, contactName, contactEmail, contactPhone,
            contactAddress
          )
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
          [
            newHouse, rented, selectedDate, garage, price, address, neighborhood, bathroom,
            rooms, area, comment, JSON.stringify(imageUrlString), // Converte o array de URLs para uma string JSON
            contactName, contactEmail, contactPhone, contactAddress,
          ],
          (_, { rowsAffected, insertId }) => {
            if (rowsAffected > 0) {
              resolve(insertId);
            } else {
              reject('Failed to insert user');
            }
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    });
  },

  getHouseById: (houseId: number): Promise<House> => {
    return new Promise<House>((resolve, reject) => {
      db.transaction((transaction) => {
        transaction.executeSql(
          'SELECT * FROM houses WHERE id = ?;',
          [houseId],
          (_, { rows }) => {
            if (rows.length > 0) {
              const house = rows.item(0) as House; // Obtém o primeiro registro encontrado
              resolve(house);
            } else {
              reject(new Error('house not found'));
            }
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    });
  },

  getHouse: () => {
    return new Promise<House>((resolve, reject) => {
      db.transaction((transaction) => {
        transaction.executeSql(
          'SELECT * FROM houses;',
          [],
          (_, { rows }) => {
            if (rows.length > 0) {
              const house = rows.item(0) as House; // Obtém o primeiro registro encontrado
              resolve(house);
            } else {
              reject(new Error('House not found'));
            }
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    });
  },
};

