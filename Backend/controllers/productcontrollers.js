const { privateDecrypt } = require("crypto");
const Product = require("../models/productmodels");
const ErrorHandler = require("../utils/errorhandler");
const asyncError = require("../middleware/asyncError")

//create products

exports.createProduct = asyncError(async (req, res,next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
  });

//get product

exports.getAllProducts = asyncError(async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      products,
    });
  });

// update product

exports.updateProducts =asyncError(async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404)); 
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

//get a single product

exports.getSingleProduct = asyncError(async (req, res,next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404)); 
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// Delete a product

exports.deleteProduct = asyncError(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404)); 
  }

 product =  await product.deleteOne({ id: req.params.id });

  res.status(200).json({
    success: true,
    message: "The product has been deleted successfully",
  });
});
