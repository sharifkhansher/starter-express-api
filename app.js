const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://sharifkhansherani2:pg6iAbaj9onSIpdl@cluster1.ml8ckbx.mongodb.net/test'
const client = new MongoClient(url);
const dbName = 'sharifdatabase';

async function db() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName)
  const collection = db.collection('person');

  return collection;
}

module.exports= db;