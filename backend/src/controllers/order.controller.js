const { where } = require("sequelize");
const { Order } = require("../models");

exports.getOrder = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { shopId, userId, stateId } = req.body;
    const newOrder = await Order.create({
      shopId,
      userId,
      stateId,
    });

    res.json(newOrder);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { shopId, userId, stateId } = req.body;

    const product = await Order.findByPk(id);

    if (!product) {
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }

    product.shopId = shopId;
    product.userId = userId;
    product.stateId = stateId;
    await product.save();

    res.json(product);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await Order.destroy({
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
