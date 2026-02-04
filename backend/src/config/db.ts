import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Connected Successfully");
  } catch (err) {
    console.error("Something Wrong", err);
    process.exit(1);
  }
};

export default dbConnect;
