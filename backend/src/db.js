 import { MongoClient } from 'mongodb';

 let db;

 async function connectToDb(cb) { 
    const  client = new MongoClient(db);
    await client.connect();

    db = client.db('react-recipe-app');
    cd();
 }

 export {
    db,
    connectToDb
 };