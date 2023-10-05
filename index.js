const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// route modules
const enroll = require("./routes/enroll");
const verify = require("./routes/verify");

// db connection
mongoose
   .connect(
      "mongodb+srv://TTF:xG4zQ2GuePAVd5nU@cluster0.hbcbrlu.mongodb.net/?retryWrites=true&w=majority"
   )
   .then(() => console.log("Databse connected successfully"))
   .catch((err) => console.log(err));

// configs
const app = express();
app.use(express.json());
app.use(
   cors({
      "Access-Control-Allow-Origin": "http://localhost:3000",
   })
);

// ROUTES
app.use("/enroll", enroll);
app.use("/verify", verify);

app.listen(process.env.PORT || 5000, () => {
   console.log("Listening to port 5000...");
});
