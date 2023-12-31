const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) =>
      console.log(`MongoDB connected with server data:${data.connection.host}`)
    )
};

