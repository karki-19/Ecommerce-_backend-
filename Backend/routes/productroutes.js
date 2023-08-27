const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProducts,
  deleteProduct,
  getSingleProduct,
} = require("../controllers/productcontrollers");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProducts);
router.route("/product/:id").delete(deleteProduct).get(getSingleProduct)

module.exports = router;
