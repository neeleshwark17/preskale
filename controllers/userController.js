const User = require("../models/User");

// CREATE
module.exports.createUser = async (req, res) => {
  const reqObject = {
    userName: req.body.userName,
    spottedAt: req.body.spottedAt,
    lastSpottedAt: req.body.lastSpottedAt,
    conservationStatus: req.body.conservationStatus,
    scientificName: req.body.scientificName,
  };

  console.log(reqObject);
  let results = await User.findOne({
    scientificName: reqObject.scientificName.trim().toLowerCase(),
  }).exec();

  if (results) {
    res.json({ msg: "Already Exists!" });
  } else {
    User.create(reqObject, (err, items) => {
      if (err) {
        res.json({ msg: "Error!", err: err });
      } else {
        res.json({ msg: "ok", obj: items });
      }
    });
  }
};

// UPDATE
module.exports.updateUser = async (req, res) => {
  const sName = req.body.oldScientificName;
  let updateObj = {
    userName: req.body.userName,
    spottedAt: req.body.spottedAt,
    lastSpottedAt: req.body.lastSpottedAt,
    conservationStatus: req.body.conservationStatus,
    scientificName: req.body.scientificName,
  };

  User.findOneAndUpdate(
    { scientificName: sName.trim().toLowerCase() },
    updateObj,
    (err, results) => {
      if (err) {
        res.json({ msg: "Error Updating!", err: err });
      } else {
        if (results == null)
          res.json({ msg: "No User with that Scientific Name" });
        else res.json({ msg: "ok", obj: results });
      }
    }
  );
};

// DELETE
module.exports.deleteUser = async (req, res) => {
  const sName = req.body.scientificName;
  User.findOneAndDelete(
    { scientificName: sName.trim().toLowerCase() },
    async (err, results) => {
      if (err) {
        res.json({ msg: "Error Deleting!", err: err });
      } else {
        if (results == null) res.json({ msg: "ok", err: "No User" });
        else {
          let usersFound = await User.find({}).exec();
          res.json({ msg: "ok", obj: usersFound });
        }
      }
    }
  );
};

// GET
module.exports.getUsers = async (req, res) => {
  let usersFound = await User.find({}).exec();
  // console.log("\n\n\n", usersFound.length);
  res.json({ msg: "ok", obj: usersFound });
};
