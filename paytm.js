// ----- Show Total Amount -----
const total = JSON.parse(localStorage.cart || "[]").reduce((sum,i)=>sum+i.p,0);
const amtEl = document.getElementById("amt");
if(amtEl) amtEl.innerText = total;

// ----- Pay Button -----
document.getElementById("payBtn").addEventListener("click", () => {
    if(total === 0) return alert("Cart is empty");

    fetch("https://YOUR_RENDER_URL/pay", { // <-- Replace with your Render backend URL
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({amount: total})
    })
    .then(res => res.json())
    .then(data => {
        alert(`Payment Successful ✅\nOrder ID: ${data.orderId}\nAmount: ₹${data.amount}`);
        localStorage.cart = "[]";  // Clear cart after payment
        location.href = "index.html"; // Redirect to home
    })
    .catch(err => alert("Payment failed: " + err));
});
