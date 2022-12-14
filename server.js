const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    methods: ["GET", "POST", "DELETE"],
  })
);

//DB Connection
const DB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "voter",
});
const a = (err) => {
  if (!err) console.log("DB connection succeeded.");
  else
    console.log(
      "DB connection is failed \n Error : " + JSON.stringify(err, undefined, 2)
    );
};
DB.connect(a);

//All data
app.get("/filter/data", (req, res) => {
  DB.query(
    "SELECT userinfo.uname, userinfo.fname, userinfo.cnic, userinfo.address, userinfo.phone_no, userinfo.email, userinfo.dob, cities_pk.name, gender.gender_names, provinces.province_name, unioncouncils.uc_values, wards.ward_values,districts.district_names, cities_pk.name FROM userinfo JOIN cities_pk ON userinfo.cities_id = cities_pk.cities_id JOIN districts ON userinfo.district_id = districts.district_id JOIN gender ON userinfo.gender_id=gender.gender_id JOIN provinces ON userinfo.province_id=provinces.province_id JOIN unioncouncils ON userinfo.uc_id=unioncouncils.uc_id JOIN wards ON userinfo.wards_id=wards.wards_id;",
    (err, rows) => {
      if (!err) {
        console.log("Success");
        res.send(rows);
      } else console.log(err);
    }
  );
});
//filter pro
app.get("/filter/pro/:data", (req, res) => {
  console.log(req.params.data);
  DB.query(
    `SELECT userinfo.uname, userinfo.fname, userinfo.cnic, userinfo.address, userinfo.phone_no, userinfo.email, userinfo.dob, cities_pk.name, gender.gender_names, provinces.province_name, unioncouncils.uc_values, wards.ward_values,districts.district_names, cities_pk.name FROM userinfo JOIN cities_pk ON userinfo.cities_id = cities_pk.cities_id JOIN districts ON userinfo.district_id = districts.district_id JOIN gender ON userinfo.gender_id=gender.gender_id JOIN provinces ON userinfo.province_id=provinces.province_id JOIN unioncouncils ON userinfo.uc_id=unioncouncils.uc_id JOIN wards ON userinfo.wards_id=wards.wards_id WHERE provinces.province_id = ${req.params.data};`,
    (err, rows) => {
      if (!err) {
        console.log("Success");
        res.send(rows);
      } else console.log(err);
    }
  );
});
app.get("/filter/city/:data", (req, res) => {
  DB.query(
    `SELECT userinfo.uname, userinfo.fname, userinfo.cnic, userinfo.address, userinfo.phone_no, userinfo.email, userinfo.dob, cities_pk.name, gender.gender_names, provinces.province_name, unioncouncils.uc_values, wards.ward_values,districts.district_names, cities_pk.name FROM userinfo JOIN cities_pk ON userinfo.cities_id = cities_pk.cities_id JOIN districts ON userinfo.district_id = districts.district_id JOIN gender ON userinfo.gender_id=gender.gender_id JOIN provinces ON userinfo.province_id=provinces.province_id JOIN unioncouncils ON userinfo.uc_id=unioncouncils.uc_id JOIN wards ON userinfo.wards_id=wards.wards_id WHERE cities_pk.cities_id = ${req.params.data}`,
    (err, rows) => {
      if (!err) {
        console.log("Success");
        res.send(rows);
      } else console.log(err);
    }
  );
});
app.get("/filter/district/:data", (req, res) => {
  DB.query(
    `SELECT userinfo.uname, userinfo.fname, userinfo.cnic, userinfo.address, userinfo.phone_no, userinfo.email, userinfo.dob, cities_pk.name, gender.gender_names, provinces.province_name, unioncouncils.uc_values, wards.ward_values,districts.district_names, cities_pk.name FROM userinfo JOIN cities_pk ON userinfo.cities_id = cities_pk.cities_id JOIN districts ON userinfo.district_id = districts.district_id JOIN gender ON userinfo.gender_id=gender.gender_id JOIN provinces ON userinfo.province_id=provinces.province_id JOIN unioncouncils ON userinfo.uc_id=unioncouncils.uc_id JOIN wards ON userinfo.wards_id=wards.wards_id WHERE districts.district_id = ${req.params.data}`,
    (err, rows) => {
      if (!err) {
        console.log("Success");
        res.send(rows);
      } else console.log(err);
    }
  );
});
app.get("/filter/uc/:data", (req, res) => {
  DB.query(
    `SELECT userinfo.uname, userinfo.fname, userinfo.cnic, userinfo.address, userinfo.phone_no, userinfo.email, userinfo.dob, cities_pk.name, gender.gender_names, provinces.province_name, unioncouncils.uc_values, wards.ward_values,districts.district_names, cities_pk.name FROM userinfo JOIN cities_pk ON userinfo.cities_id = cities_pk.cities_id JOIN districts ON userinfo.district_id = districts.district_id JOIN gender ON userinfo.gender_id=gender.gender_id JOIN provinces ON userinfo.province_id=provinces.province_id JOIN unioncouncils ON userinfo.uc_id=unioncouncils.uc_id JOIN wards ON userinfo.wards_id=wards.wards_id WHERE unioncouncils.uc_id = ${req.params.data}`,
    (err, rows) => {
      if (!err) {
        console.log("Success");
        res.send(rows);
      } else console.log(err);
    }
  );
});
app.get("/filter/ward/:data", (req, res) => {
  DB.query(
    `SELECT userinfo.uname, userinfo.fname, userinfo.cnic, userinfo.address, userinfo.phone_no, userinfo.email, userinfo.dob, cities_pk.name, gender.gender_names, provinces.province_name, unioncouncils.uc_values, wards.ward_values,districts.district_names, cities_pk.name FROM userinfo JOIN cities_pk ON userinfo.cities_id = cities_pk.cities_id JOIN districts ON userinfo.district_id = districts.district_id JOIN gender ON userinfo.gender_id=gender.gender_id JOIN provinces ON userinfo.province_id=provinces.province_id JOIN unioncouncils ON userinfo.uc_id=unioncouncils.uc_id JOIN wards ON userinfo.wards_id=wards.wards_id WHERE wards.wards_id = ${req.params.data};`,
    (err, rows) => {
      if (!err) {
        console.log("Success");
        res.send(rows);
      } else console.log(err);
    }
  );
});
app.get("/filter/gender/:data", (req, res) => {
  DB.query(
    `SELECT userinfo.uname, userinfo.fname, userinfo.cnic, userinfo.address, userinfo.phone_no, userinfo.email, userinfo.dob, cities_pk.name, gender.gender_names, provinces.province_name, unioncouncils.uc_values, wards.ward_values,districts.district_names, cities_pk.name FROM userinfo JOIN cities_pk ON userinfo.cities_id = cities_pk.cities_id JOIN districts ON userinfo.district_id = districts.district_id JOIN gender ON userinfo.gender_id=gender.gender_id JOIN provinces ON userinfo.province_id=provinces.province_id JOIN unioncouncils ON userinfo.uc_id=unioncouncils.uc_id JOIN wards ON userinfo.wards_id=wards.wards_id WHERE gender.gender_id = ${req.params.data};`,
    (err, rows) => {
      if (!err) {
        console.log("Success");
        res.send(rows);
      } else console.log(err);
    }
  );
});

//Province
app.get("/province/data", (req, res) => {
  DB.query("SELECT * FROM provinces", (err, rows) => {
    if (!err) {
      console.log("Success");
      res.send(rows);
    } else console.log(err);
  });
});
//District
app.get("/district/data", (req, res) => {
  DB.query("SELECT * FROM districts", (err, rows) => {
    if (!err) {
      console.log("Success");
      res.send(rows);
    } else console.log(err);
  });
});
//Cities
app.get("/city/data", (req, res) => {
  DB.query("SELECT * FROM cities_pk", (err, rows) => {
    if (!err) {
      console.log("Success");
      res.send(rows);
    } else console.log(err);
  });
});
//Union Councils
app.get("/unioncouncil/data", (req, res) => {
  DB.query("SELECT * FROM unioncouncils", (err, rows) => {
    if (!err) {
      console.log("Success");
      res.send(rows);
    } else console.log(err);
  });
});
//Wards
app.get("/ward/data", (req, res) => {
  DB.query("SELECT * FROM wards", (err, rows) => {
    if (!err) {
      console.log("Success");
      res.send(rows);
    } else console.log(err);
  });
});
//Genders
app.get("/gender/data", (req, res) => {
  DB.query("SELECT * FROM gender", (err, rows) => {
    if (!err) {
      console.log("Success");
      res.send(rows);
    } else console.log(err);
  });
});

//Post
function createUser(req, res) {
  console.log(req.body);
  const data = req.body;
  console.log(data);
  DB.query(
    `INSERT INTO userinfo (uname,fname,cnic,address,phone_no,email,dob,cities_id,district_id,gender_id,province_id,uc_id,wards_id	) VALUES ("${data.uname}","${data.fname}","${data.cnic}","${data.address}","${data.phone_no}","${data.email}","${data.dob}","${data.cities_id}","${data.district_id}","${data.gender_id}","${data.province_id}","${data.uc_id}","${data.wards_id}")`,
    (err, rows, fields) => {
      if (!err) {
        console.log("succeed");
        res.send(rows);
      } else console.log(err, "errerrrrrrrrrr");
    }
  );
}
app.post("/create/new_user", createUser);

app.listen(8000, () => {
  console.log("Server is up on port 8000");
});
