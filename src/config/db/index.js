import mongoose from "mongoose";
import { databaseURl } from "../../secret.js";

const connectDatabase = async () => {
  try {
    const dbConnect = await mongoose.connect(databaseURl);
    console.log(
      `Mongodb connection successful on port number is ${dbConnect.connection.port}`
    );
  } catch (error) {
    console.log(`MongoDb connection error ${error.message}`);
  }
};

export default connectDatabase;
