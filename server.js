const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
// const { getMaxListeners } = require("node:process");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// instantiate an express app
const app = express();
// cors
app.use(cors({ origin: "*" }));

app.use("/public", express.static(process.cwd() + "/public")); //make public static

function sendMessage() {
    try {
      // mail options
      const mailOptions = {
        from: "ocskier@gmail.com",
        to: "philosivy@gmail.com",
        subject: "Hey there!",
        text: "Whoa! It freakin works now."
      };
      // here we actually send it
      transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
          console.log("Error sending message: " + err);
        } else {
          // no errors, it worked
          console.log("Message sent succesfully.");
        }
      });
    } catch (error) {
      console.log("Other error sending message: " + error);
    }
  }

  // thats the key part, without all these it didn't work for me
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
        type: "OAUTH2",
        user: 'philosivy@gmail.com', //set these in your .env file
        clientId: "769553003033-k0iu17efpqg0s53tj7g9f90sa7feg84j.apps.googleusercontent.com",
        clientSecret: "IkKZtK0jWAoG95K4RPMJhOiM",
        refreshToken: "1//04MKO_U0bfnKsCgYIARAAGAQSNwF-L9IrimbNwJWYY2U-mdqbXiDM13FtmIV9KMOSYCGd7qzgMOEwvp5WgyBq8aW_l52OYQPcMVY", 
        accessToken: "ya29.a0ARrdaM9V1vRBDWJ5FnZ-V1V86R1g-aMdCrn3WMGHbsGRpjRslJNIeTN78_oRIELbYD5afUMeDKdl4mqz8C3AjuWUbjmNOyOMb4MAO01pGqvlhXVtQlKsZrAI98Y1kPb9qit1WNJSgGpymhKpxoJm47syMJn8",
        // expires: 3599,
        scope:"https://mail.google.com/"
    }
  });

  // invoke sending function
  sendMessage();

// //Index page (static HTML)
// app.route("/").get(function (req, res) {
//   res.sendFile(process.cwd() + "/public/index.html");
// });

/*************************************************/
// Express server listening...
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
