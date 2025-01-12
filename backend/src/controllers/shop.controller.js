const { where } = require("sequelize");
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
    const { name } = req.body;
    const newShop = await Shop.create({
      name,
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
