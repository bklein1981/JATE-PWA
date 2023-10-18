import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');

  //Create a connection to the database
  const jateDb = await openDB('jate', 1);

  //create a new transaction
  const tx = jateDb.transaction('jate', 'readwrite');

  //retreive object store 'jate' from the transaction
  const store = tx.objectStore('jate');

  //retrieve all data in the database
  const request = store.getAll();

  //get confirmation the request was successful
  const result = await request;
  console.log('result.value', result)
  return result
}






console.error('getDb not implemented');

initdb();
