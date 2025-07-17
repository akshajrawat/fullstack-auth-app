// basic imoprts
const mongoose = require("mongoose");

// connect mongo db
const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB Connected: ${conn.connection.host} (${conn.connection.name})`
    );
  } catch (error) {
    console.error("Error :-", error.message);
    process.exit(1);
  }
};

// export
module.exports = dbConnect;
