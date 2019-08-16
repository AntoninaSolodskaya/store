// const express = require('express');

// const app = express();
// app.get('/api/carts', (req, res) => {
//   const carts = [
//     {
//       id: "3",
//       title: "TC 2016 Red SS",
//       description: [
//         {
//           item: "Name Of Product",
//           characters: "Some quick example bulk of the card&apos;s content"
//         },
//         {
//           item: "Country",
//           characters: "China"
//         }
//       ],
//       price: 74,
//       img:
//         "https://cdn.shopify.com/s/files/1/0340/2849/products/TC2016_red_SS_front_grande.jpg?v=1468602448"
//     },
//     {
//       id: "4",
//       title: "TC 2016 Dark SS",
//       description: [
//         {
//           item: "Name Of Product",
//           characters: "Some quick example bulk of the card&apos;s content"
//         },
//         {
//           item: "Country",
//           characters: "China"
//         }
//       ],
//       price: 35.99,
//       img:
//         "https://cdn.shopify.com/s/files/1/0340/2849/products/TC2016_SS_front_grande.jpg?v=1460557226"
//     }
//   ];

//   res.json(carts);
// })

// const port = 5000;

// app.listen(port, () => console.log(`Server started on port ${port}`));

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");

const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

 // Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users); 

const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server up and running on port ${port} !`));