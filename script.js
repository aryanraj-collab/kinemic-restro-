function pay(amount) {
  fetch("http://localhost:5000/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount })
  })
  .then(res => res.json())
  .then(order => {
    var options = {
      key: "RAZORPAY_KEY_ID",
      amount: order.amount,
      currency: "INR",
      name: "Namaste Tech",
      description: "Food Payment",
      order_id: order.id,
      handler: function (response) {
        console.log("Payment Success", response);
      }
    };
    var rzp = new Razorpay(options);
    rzp.open();
  });
}
