import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var mongoose: MongooseConnection | undefined;
}

// Use const since cached is not reassigned
const cached: MongooseConnection = global.mongoose || { conn: null, promise: null };

// Initialize global.mongoose if it's not already set
if (!global.mongoose) {
  global.mongoose = cached;
}

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error('Missing MONGODB_URL');

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: 'imaginify',
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
