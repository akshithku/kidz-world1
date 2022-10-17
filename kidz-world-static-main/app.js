var button=document.getElementsByClassName("button")
var cart = document.getElementById("cart-value")

for(i=0;i<button.length;i++){
    button[i].onclick = addToCart;
}

function addToCart(){
    cart.innerHTML = parseInt(cart.innerHTML)+1;
}