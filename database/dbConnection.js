import mongoose from "mongoose";
export const dbConnection = () =>
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "HOSPITAL_MANGAGEMENT_SYSTEM",
    })
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log(`some error occured while connecting to database: ${err}`);
    });
