const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
mongoose.connect("mongodb://localhost:27017/newCollection", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
  
// const contactSchema = {
//   email: String,
//   query: String,
// };
  
// const Contact = mongoose.model("Contact", contactSchema);
  
const app = express();
app.use(cors());
  
app.get("/app/login", function(req, res){
    console.log("Login")
    const login = { login: true }
    res.status(200).json(login);
});
  
// app.post("/contact", function (req, res) {
//     console.log(req.body.email);
//   const contact = new Contact({
//       email: req.body.email,
//       query: req.body.query,
//   });
//   contact.save(function (err) {
//       if (err) {
//           throw err;
//       } else {
//         res.render("contact");
//       }
//   });
// });
  
app.listen(3000, function(){
    console.log("App is running on Port 3000");
});