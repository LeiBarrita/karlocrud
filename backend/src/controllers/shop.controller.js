const { where, Op } = require("sequelize");
const { Shop } = require("../models");

exports.getShops = async (req, res) => {
  try {
    const shops = await Shop.findAll();
    res.json(shops);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.createShop = async (req, res) => {
  try {
    const { name, userId } = req.body;
    const newShop = await Shop.create({
      name,
      userId,
    });

    res.json(newShop);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateShop = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const shop = await Shop.findByPk(id);

    if (!shop) {
      return res.status(404).json({
        message: "Negocio no encontrado",
      });
    }

    shop.name = name;
    await shop.save();

    res.json(shop);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteShop = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await Shop.destroy({
      where: {
        id,
      },
    });

    if (deletedRows === 0) {
      return res.status(404).json({
        message: "Negocio no encontrado",
      });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.findShopById = async (req, res) => {
  try {
    const { id } = req.params;

    const shop = await Shop.findByPk(id);

    res.json(shop);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.findShops = async (req, res) => {
  try {
    const { match } = req.query;

    if (!match) {
      res.status(400).json({ message: "Nombre para busqueda inválido" });
    }

    const shops = await Shop.findAll({
      where: {
        name: {
          [Op.iLike]: `%${match}%`,
        },
      },
    });

    // if (!shops) res.sendStatus(404);
    res.json(shops);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
