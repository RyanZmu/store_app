const express = require('express');
const { MongoClient } = require("mongodb");
// const morgan = require('morgan');
const env = require("./loadEnvironment.js");

// const uri = "mongodb+srv://ryanzmudka:nyl7HAc4GOSngBvN@storedb.neksqtl.mongodb.net/"

const connectionString = process.env.ATLAS_URI || ""


const client = new MongoClient(connectionString);

let conn;

try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("storeDB");

export default db;




// const client = new MongoClient(uri);
// async function run() {
//     try {
//         await client.connect()
//         const db = client.db("storeDB")
//         const coll = db.collection("storeData") //change to to storeData afte test

//         const cursor = coll.find()

//         await cursor.forEach(console.log)
//     } finally {
//         await client.close()
//     }
// }
// run().catch(console.dir)