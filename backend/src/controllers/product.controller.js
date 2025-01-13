const { where } = require("sequelize");
const { Product } = require("../models");

exports.getProduct = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getProductsByShop = async (req, res) => {
  try {
    const { shopId } = req.params;

    if (!shopId) {
      res.status(400).json({ message: "Negocio invalido" });
    }

    const products = await Product.findAll({
      where: { shopId },
    });

    res.json(products);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, quantity, price, available } = req.body;
    const newProduct = await Product.create({
      name,
      quantity,
      price,
      available,
    });

    res.json(newProduct);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity, price } = req.body;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({
        message: "Producto no encontrado",
      });
    }

    product.name = name;
    product.quantity = quantity;
    product.price = price;
    quantity > 0 ? (product.available = true) : (product.available = false);
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
    const deletedRows = await Product.destroy({
      where: {
        id,
      },
    });

    if (deletedRows === 0) {
      return res.status(404).json({
        message: "Producto no encontrado",
      });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.findProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    res.json(product);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.findProduct = async (req, res) => {
  try {
    const { match } = req.query;

    if (!match) {
      res.status(400).json({ message: "Parametro de busqueda inválido" });
    }

    const products = await Product.findAll({
      where: {
        name: {
          [Op.iLike]: `%${match}%`,
        },
      },
    });

    res.json(products);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.changeQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { amount } = req.query;

    const product = await Product.findByPk(id);

    if (!product) res.sendStatus(404);

    const newQuantity = product.quantity + amount;
    product.quantity = newQuantity < 0 ? 0 : newQuantity;
    product.save();

    res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
