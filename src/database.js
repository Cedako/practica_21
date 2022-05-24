const mongoose = require ("mongoose");
require("dotenv").config();
(async () => {
  try {
    const db = await mongoose.connect('mongodb+srv://Daecko:WyAAUOQajya9R2FE@cluster0.ifuv3.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb is connected to", db.connection.host);
  } catch (error) {
    console.error(error);
  }
})();