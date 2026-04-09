const container = document.getElementById("cart");

function renderCart(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    container.innerHTML = "";
    let total = 0;

    cart.forEach(item=>{
        let product = products.find(p=>p.id===item.id);
        total += product.price * item.qty;

        let div = document.createElement("div");
        div.className="card";
        div.innerHTML=`
            <h3>${product.name}</h3>
            <p>${item.qty} x $${product.price}</p>
            <button onclick="removeItem(${item.id})">Удалить</button>
        `;
        container.appendChild(div);
    });

    container.innerHTML += `<h2>Итого: $${total}</h2>`;
}

function removeItem(id){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(i=>i.id!==id);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

function checkout(){
    alert("Заказ оформлен!");
    localStorage.removeItem("cart");
    renderCart();
}

renderCart();
