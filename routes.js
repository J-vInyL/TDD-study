import express from "express";
//import { hello } from "./controller/products.js";
import {
  createProduct,
  getProducts,
  getProductById
} from "./controller/products.js";
const router = express.Router();

//router.get("/", hello);

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:productId", getProductById);
// router.get("/", (req, res) => {
//   res.send("안녕");
// });

export default router;
