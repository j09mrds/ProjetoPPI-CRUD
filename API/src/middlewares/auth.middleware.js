const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const encoded = req.headers.authorization.split(' ')[1];
  //const decoded = Buffer.from(encoded, "base64").toString();
  console.log(encoded);
  try {
    const decoded = jwt.verify(encoded, "iehiewhienfiwefniweniaicni");
    ////////////////////////////////////

    const user = await UserModel.find(decoded.id);
    //////////////////////////////////
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
}

module.exports = auth;