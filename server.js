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
        from: "MySite@mysite.com",
        to: "my_gmail@gmail.com",
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
        refreshToken: "1//04ABlATmHy9m4CgYIARAAGAQSNwF-L9IrCZHABlyFneJnZnNwkA2I0IwFyzimO1TtPs4eJXvC-WSCHGYG3kkmfiReCaRJfPlBkLk", 
        accessToken: "ya29.a0ARrdaM88mluuTYf9QVRS8GN-to50S3h5AMF9QWw99jz2MLnzDgt6oXNq0Hk_e2lYZSTGAiGI-cLdbvexhiqFtqdNgCfQ8RzTYFU4JNjq_sEPVV1Z4TDSw42w09ZADXHu8uSIZDXGPXaF69fZ1xpnLwapA4gh",
        expires: 3599
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
