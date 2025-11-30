const mongoose = require('mongoose');
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => {
    console.log("Connected to DB"); 
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
};

const initDB = async () => {
    await Listing.deleteMany({});
    console.log(initData.data);

initData.data = initData.data.map((obj) => {
    return {
        ...obj,
        owner: "6923d4d44831f97e1610280e",
        category: obj.category || "trending"   // force correct field
    };
});

    await Listing.insertMany(initData.data);
    console.log('data was initialised');
}

initDB();