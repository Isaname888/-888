const container = document.getElementById("products");
const searchInput = document.getElementById("search");

function renderProducts(list) {
    container.innerHTML = "";
    list.forEach(p => {
        const el = document.createElement("div");
        el.className = "card";
        el.innerHTML = `
            <h3>${p.name}</h3>
            <p>${p.description}</p>
            <div class="price">$${p.price}</div>
            <button onclick="addToCart(${p.id})">В корзину</button>
        `;
        container.appendChild(el);
    });
}

function addToCart(id){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let item = cart.find(i => i.id === id);
    if(item) item.qty++;
    else cart.push({id, qty:1});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Добавлено!");
}

searchInput.addEventListener("input", e=>{
    const value = e.target.value.toLowerCase();
    const filtered = products.filter(p=>p.name.toLowerCase().includes(value));
    renderProducts(filtered);
});

renderProducts(products);
