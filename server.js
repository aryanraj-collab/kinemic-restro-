const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: "RAZORPAY_KEY_ID",
  key_secret: "RAZORPAY_SECRET"
});

app.post("/create-order", async (req, res) => {
  const options = {
    amount: req.body.amount * 100,
    currency: "INR"
  };
  const order = await razorpay.orders.create(options);
  res.json(order);
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
