import mongoose, { Mongoose } from "mongoose";

// const db = process.env. MONGODB_URI;

// export default async function connectDB() {
//   try {
//     mongoose.connect(db!);
//     const connection = mongoose.connection;

//     connection.on("connected", () => {
//       console.log("Database Connected");
//     });
//     connection.on("error", (error: any) => {
//       console.log("Database Connection Failed", error);
//       process.exit();
//     });
//   } catch (error: any) {
//     console.log("Database Connection Failed", error);
//   }
// }

// mongodb.js

import { MongoClient } from 'mongodb'

const uri : any = process.env.MONGODB_URI
const options: any = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise
let  global: any = globalThis 

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to .env.local')
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise ) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
