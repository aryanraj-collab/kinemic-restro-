// ----- Menu Items -----
let items = JSON.parse(localStorage.menuItems || `[
  {"n":"Pizza","p":300,"img":"https://images.unsplash.com/photo-1604382355076-af4b0eb60143"},
  {"n":"Burger","p":400,"img":"https://images.unsplash.com/photo-1550547660-d9450f859349"},
  {"n":"Samosa","p":50,"img":"https://images.unsplash.com/photo-1601050690597-df0568f70950"},
  {"n":"Paneer Paratha","p":80,"img":"https://images.unsplash.com/photo-1666001120894-d2e16d8a5bc3"}
]`);

// ----- Cart -----
let cart = JSON.parse(localStorage.cart || "[]");

// ----- Render Menu on index.html -----
function renderMenu() {
    const menu = document.getElementById("menu");
    menu.innerHTML = "";
    items.forEach(i => {
        menu.innerHTML += `
        <div class="card">
            <img src="${i.img}" alt="${i.n}">
            <div class="info">
                <h3>${i.n}</h3>
                <p>₹${i.p}</p>
                <button onclick='addToCart("${i.n}", ${i.p})'>Add to Cart</button>
            </div>
        </div>`;
    });
}

// ----- Add Item to Cart -----
function addToCart(name, price){
    cart.push({n:name, p:price});
    localStorage.cart = JSON.stringify(cart);
    alert(`${name} added to cart ✅`);
    updateCartCount();
}

// ----- Show Cart Count -----
function updateCartCount(){
    const countEl = document.getElementById("cartCount");
    if(countEl) countEl.innerText = cart.length;
}

// ----- Calculate Cart Total -----
function cartTotal(){
    return cart.reduce((sum, i) => sum + i.p, 0);
}

// Initialize
renderMenu();
updateCartCount();
