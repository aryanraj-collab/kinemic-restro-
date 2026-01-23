// ----- Admin Menu -----
let menu = JSON.parse(localStorage.menuItems || "[]");

// ----- Render Admin Panel -----
function renderAdmin() {
    const list = document.getElementById("list");
    list.innerHTML = "";
    menu.forEach((i, idx) => {
        list.innerHTML += `
        <div class="item">
            <span>${i.n} - ₹${i.p}</span>
            <button class="small" onclick="deleteItem(${idx})">X</button>
        </div>`;
    });
}

// ----- Add New Menu Item -----
function addItem() {
    const name = document.getElementById("name").value;
    const price = +document.getElementById("price").value;
    const img = document.getElementById("img").value;
    if(!name || !price || !img) return alert("Please fill all fields");

    menu.push({n: name, p: price, img});
    localStorage.menuItems = JSON.stringify(menu);

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("img").value = "";

    renderAdmin();
}

// ----- Delete Menu Item -----
function deleteItem(idx){
    menu.splice(idx, 1);
    localStorage.menuItems = JSON.stringify(menu);
    renderAdmin();
}

// Initialize
renderAdmin();
