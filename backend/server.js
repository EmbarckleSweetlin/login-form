const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const mailer = require("nodemailer");
app.use(cors());
app.use(express.json());

const dbConnection = mysql.createConnection({
  host: "54.205.81.137",
  user:	"test", 
  password: "Embarckle@2020",
  database: "test1",
});

const user = {};

const transporter = mailer.createTransport(
  {
    host: "webhosting2040.is.cc",
    port: 465,
    secure: true,
    auth: {
      user: "sweetlin@devil7softwares.com",
      pass: "!d0r?tWgnj8.]~0W06",
    },
  },
  {
    from: "sweetlin@devil7softwares.com",
  }
);

app.post("/signup", (req, res) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;

  dbConnection.query(
    "SELECT EXISTS(SELECT * FROM users WHERE email=? )",
    [email],
    (err, result) => {
      if(email==undefined || password==undefined || userName==undefined ){
        res.send('please enter the details');
      }
      else if (Object.values(result[0])[0] == 0) {
        var OTP = Math.floor(Math.random() * 10000);
        user[email] = {
          email,
          userName,
          password,
          OTP,
        };
        transporter.sendMail({
          to: user[email].email,
          subject: "kindly verify your mail with otp",
          text: `otp is ${user[email].OTP}`,
        }).catch(err=>console.log(err));
        if (err) {
          res.send(err);
        } else {
          res.send("Mail sent successfuly");
        }
      } else {
        res.send("you already have an account");
      }
    }
  );
});

app.post("/verify", (req, res) => {
  const { otp, email } = req.body;

  if (user[email].OTP == otp) {
          dbConnection.query(
            "INSERT INTO users(name, email, password) Values (?,?,?)",
            [user[email].userName, user[email].email, user[email].password],
            (err, result) => {
              if (err) {
                res.send(err);
              } else {
                res.send("Successfully Completed");
              }
            }
          )
  }
   else {
    res.send("otp is invalid");
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  dbConnection.query(
    "SELECT EXISTS(SELECT * FROM users WHERE email=? AND password=? )",
    [email, password],
    (err, result) => {
      if (Object.values(result[0])[0] == 1) {
        res.send("login successfully");
      } else if(err){
        res.send(err);
      } 
      else {
        res.send("invalid mail id/password, please signup");
      }
    }
  );
});

app.post('/forgetpassword', (req, res)=>{
  const {newpassword, email} = req.body;
  dbConnection.query(
    "SELECT EXISTS(SELECT * FROM users WHERE email=? )",
    [email],
    (err, result) => {
  if(Object.values(result[0])[0] == 1) {
    var OTP = Math.floor(Math.random() * 10000);
    user[email] = {
      email,
      newpassword,
      OTP,
    };
    transporter.sendMail({
      to: user[email].email,
      subject: "kindly verify your mail with otp",
      text: `otp is ${user[email].OTP}`,
    });
    if (err) {
      res.send(err);
    } else {
      res.send("Mail sent successfuly");
    }
  } else{
    res.send("error/you don't have an account, please signup")}
    }
  )
})

app.post("/forgetverify", (req, res) => {
  const { otp, email, newpassword } = req.body;

  if (user[email].OTP == otp) {  
        dbConnection.query(
          "UPDATE users set password=? where email=?",
          [user[email].newpassword, user[email].email], (err,result)=>{
            if(err){
              res.send(err);
            } else{
      res.send('Successfully completed, please login');
            }
          }) 
        } else{
          res.send('invalid otp')}
        })


app.get("/about", (req, res) => {
  dbConnection.query("SELECT * from test1.users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("connected");
    }
  });
});

app.listen(3500, function () {
  console.log("success");
});
