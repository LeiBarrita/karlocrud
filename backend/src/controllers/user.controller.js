const { User } = require("../models");

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.createUser = async (req, res) => {
  const { username, email, password, verified } = req.body;

  try {
    const newUser = await User.create({
      username,
      email,
      password,
      verified,
    });

    res.json(newUser);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
