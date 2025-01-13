const { where, Op } = require("sequelize");
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

exports.getOrdersByShop = async (req, res) => {
  try {
    const { shopId } = req.params;

    if (!shopId) {
      res.status(400).json({ message: "Negocio invalido" });
    }

    const orders = await Order.findAll({
      where: { shopId },
    });

    res.json(orders);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ message: "Usuario requerido" });
    }

    const orders = await Order.findAll({
      where: { userId },
    });

    return res.json(orders);
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

exports.updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { shopId, userId, stateId } = req.body;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({
        message: "Usuario no encontrado",
      });
    }

    order.shopId = shopId;
    order.userId = userId;
    order.stateId = stateId;
    await order.save();

    res.json(order);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteOrder = async (req, res) => {
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

exports.updateOrderState = async (req, res) => {
  try {
    const { id } = req.params;
    const { stateId } = req.body;

    if (stateId === undefined) {
      return res.status(400).json({
        message: "estatus es requerido",
      });
    }

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({
        message: "Orden no encontrada",
      });
    }

    order.stateId = stateId;
    await order.save();

    res.json(order);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.findOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findByPk(id);

    return res.json(order);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.findOrders = async (req, res) => {
  try {
    const { match } = req.query;

    if (!match) {
      res.status(400).json({ message: "Parametro de busqueda inválido" });
    }

    const orders = await Order.findAll({
      where: {
        [Op.or]: [
          { stateId: { [Op.iLike]: `%${match}%` } },
          { total: { [Op.iLike]: `%${match}%` } },
        ],
      },
    });

    return res.json(orders);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
