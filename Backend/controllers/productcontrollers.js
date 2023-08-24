const { privateDecrypt } = require("crypto");
const Product = require("../models/productmodels");

//create products

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

//get product

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products 
  });
};

// update product 

exports.updateProducts = async (req,res)=>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success: false,
            message:"Product not found"
        })
    }
    
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false 
    });

    res.status(200).json({
        success: true,
        product
    })
}

// Delete a product

