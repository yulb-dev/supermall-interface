const express = require("express");
const router = express.Router();
const User = require("../model/user");
const Scarts = require("../model/shoppingCart");
const Orders = require("../model/orders");

router.post("/", (req, res) => {
  User.findOne(
    { name: req.body.name, password: req.body.password },
    (err, data) => {
      if (err) return res.send(err);
      if (data) {
        Scarts.find({ userid: data._id }, (err, data1) => {
          Orders.find({ userid: data._id }, (err, data2) => {
            req.session.userid = data._id;
            res.send({ data, data1, data2 });
          });
        });
      } else res.send({ data: "用户名或密码错误" });
    }
  );
});

router.post("/registered", (req, res) => {
  User.create(
    { name: req.body.name, password: req.body.password },
    (err, data) => {
      if (err) {
        res.send({ status: 404, data: "用户名已存在" });
      } else {
        req.session.userid = data._id;
        res.send(data);
      }
    }
  );
});

module.exports = router;
