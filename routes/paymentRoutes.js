import express from "express";
import { checkout, paymentVerification } from "../controllers/paymentController.js";
const router = express.Router()

router.route('/checkout').post(checkout);
router.route('/paymentVerficiation').post(paymentVerification)

export default router