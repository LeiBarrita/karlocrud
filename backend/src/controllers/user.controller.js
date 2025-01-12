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
  const { username, email, password, roleId } = req.body;

  try {
    const newUser = await User.create({
      username,
      email,
      password,
      roleId,
    });

    res.json(newUser);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
