import mongoose, { ConnectOptions, Schema } from "mongoose";

export const dbConnect = async () => {
  const uri =
    process.env.NODE_ENV == "dev" || process.env.NODE_ENV == "test"
      ? process.env.DEV_URI
      : process.env.PROD_URI;
  await mongoose.connect(uri!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);
  console.log("✅ Connected to MongoDB");
};

export const dbDisconnect = async () => {
  await mongoose.disconnect();
  console.log("✅ Disconnected from MongoDB");
};

export function insertDoc() {
  const Doc = mongoose.model('Doc', new Schema({
    date: Number,
    fog_net_id: String,
    cluster_id: String,
    water_collected: Number
  }));

  const doc1 = new Doc({
    date: 2023,
    fog_net_id: "clusterID_302942",
    cluster_id: "clusterID323",
    water_collected: 100.78
  })

  doc1.save();
}
