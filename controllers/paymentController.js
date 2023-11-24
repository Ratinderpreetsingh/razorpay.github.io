import Razorpay from 'razorpay';
import { instance } from '../server.js';

export const checkout = async (req, res) => {
  console.log("order", req.body);

  const options = {
    amount:Number(req.body.amount) * 100,  // amount in the smallest currency unit
    currency: "INR",
  };

  try {
    const order = await instance.orders.create(options);
    console.log(order);
    res.status(200).json({  
      success: true,
      order,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({
      success: false,
      error: "Unable to create the order",
    });
  }
};

export const paymentVerification = async (req, res) => {
  console.log("ver",req.body) 
  const {razorpay_payment_id,razorpay_order_id,razorpay_signature}=req.body
  console.log(razorpay_payment_id)
  try { 
 
    res.status(200).json({
      success: true,
      data:req.body
    });

  } catch (error) {
    console.error("Error during payment verification:", error);
    res.status(500).json({
      success: false,
      error: "Unable to verify the payment",
    });
  }
};
