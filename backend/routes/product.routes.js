import express from "express";
import { createProduct, getProducts, deleteProduct, updateProduct } from "../controllers/product.controllers.js";
const router=express.Router();
router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct );
router.delete("/:id", deleteProduct); 
export default router;