import { db } from '../database';
import { SQLite } from '../types/SQLite';

export const createTable = () => {
  db.transaction((transaction) => {
    transaction.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT
      );`,
      [],
      (_, result) => {
        console.log('Table created successfully');
      },
      (_, error) => {
        console.log('Error creating table:', error);
      }
    );
  });
};

export const sql = {
  createUser: (user: SQLite) => {
    return new Promise((resolve, reject) => {
      db.transaction((transaction) => {
        transaction.executeSql(
          'INSERT INTO users (name, email) VALUES (?, ?);',
          [user.name, user.email],
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

  getUserById: (userId: number): Promise<User> => {
    return new Promise<SQLite>((resolve, reject) => {
      db.transaction((transaction) => {
        transaction.executeSql(
          'SELECT * FROM users WHERE id = ?;',
          [userId],
          (_, { rows }) => {
            if (rows.length > 0) {
              const user = rows.item(0) as SQLite; // Obtém o primeiro registro encontrado
              resolve(user);
            } else {
              reject(new Error('User not found'));
            }
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    });
  },

  getUser: (): Promise<SQLite> => {
    return new Promise<SQLite>((resolve, reject) => {
      db.transaction((transaction) => {
        transaction.executeSql(
          'SELECT * FROM users;',
          [],
          (_, { rows }) => {
            if (rows.length > 0) {
              const user = rows.item(0) as SQLite; // Obtém o primeiro registro encontrado
              resolve(user);
              console.log(rows._array[5].name)
            } else {
              reject(new Error('User not found'));
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

