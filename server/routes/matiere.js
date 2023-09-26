import {getProducts, getProductById, createProduct, updateProduct, deleteProduct} from '../../../Downloads/gescom-ODC-main/gescom-ODC-main/server/controllers/products.js';
import {upload} from '../../../Downloads/gescom-ODC-main/gescom-ODC-main/server/middlewares/upload.js'
import express from 'express';
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/',upload.single('image'), createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;