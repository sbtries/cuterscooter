const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");

const StickerController = require("./controllers/sticker.controller.js");
const AuthController = require("./controllers/auth.controller");
const UsersController = require("./controllers/users.controller");

// Express application
const app = express();

// Middleware
app.use(cors());
/* istanbul ignore if */
if(process.env.ENV !== "test") app.use(morgan("tiny"));
app.use(express.json());

// Controllers
app.use("/stickers", StickerController);
app.use("/auth", AuthController);
app.use("/users", UsersController);

// Helper functions
const connectDatabase = async (databaseName="cuterscooter") => {
  const database = await mongoose.connect(
    `mongodb://localhost/${databaseName}`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true
    }
  );

  return database;
}
const startServer = (port=8000, host="localhost") => {
  app.listen(port, host, async () => {
    await connectDatabase();

    console.log(`Listening at ${host}:${port}...`);
  })
}

module.exports = {
  app,
  connectDatabase,
  startServer,
};