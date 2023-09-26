import { createUser, login } from "../../../Downloads/gescom-ODC-main/gescom-ODC-main/server/controllers/auth.js";
import protect from "../../../Downloads/gescom-ODC-main/gescom-ODC-main/server/middlewares/protect.js";
import express from 'express';
const router = express.Router();

router.post('/signup',  createUser)
router.post('/login', login);

export default router