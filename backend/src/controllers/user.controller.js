const { where, Op } = require("sequelize");
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
  try {
    const { username, email, password, roleId, shopId } = req.body;
    const newUser = await User.create({
      username,
      email,
      password,
      roleId,
      shopId,
    });

    res.json(newUser);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email, password, roleId, shopId } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }

    user.username = username;
    user.email = email;
    user.password = password;
    user.roleId = roleId;
    user.shopId = shopId;
    await user.save();

    res.json(user);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await User.destroy({
      where: {
        id,
      },
    });

    if (deletedRows === 0) {
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.findUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    res.json(user);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.findUsers = async (req, res) => {
  try {
    const { match } = req.query;

    if (!match) {
      res.status(400).json({ message: "Parametro de busqueda inválido" });
    }

    const users = await User.findAll({
      where: {
        [Op.or]: [
          { username: { [Op.iLike]: `%${match}%` } },
          { email: { [Op.iLike]: `%${match}%` } },
        ],
      },
    });

    // if (!users) res.sendStatus(404);
    res.json(users);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.activateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);
    user.verified = true;
    user.save();

    res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
