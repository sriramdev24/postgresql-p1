import express from 'express'
import { GetProducts,CreateProducts , GetProduct , UpdateProduct , DeleteProduct } from '../controller/product.controller.js';

const ProductRouter = express.Router()

ProductRouter.get("/" , GetProducts)
ProductRouter.post("/" , CreateProducts)
ProductRouter.get("/:id" , GetProduct)
ProductRouter.put("/:id" , UpdateProduct)
ProductRouter.delete("/:id" , DeleteProduct)


export default ProductRouter;