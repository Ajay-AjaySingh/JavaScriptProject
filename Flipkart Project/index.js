import { cart,addToCart } from "./data/cart.js";
import { products } from "./data/products.js";

products.forEach(product => {
    const cartHtml = `
    <div class="product-cart">
        <img src="${product.image}" alt="" class="product-image">
    
        <P class="product-title">${product.title}</P>
    
        <p class="product-price">${product.price}</p>
    
        <!-- Quantity Dropdown -->
        <select class="product-quantity" data-product-id="${product.id}">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
    
        <button class="product-button js-add-button"
            data-product-id="${product.id}"
            data-product-price="${product.price}">
            Add to Cart
        </button>
    </div>
    `;

    document.querySelector(".container").innerHTML += cartHtml;
});



function updateCart(){

    let cartQuentity=0;

    cart.forEach((item)=>{
        cartQuentity+=item.quantity;
    })

    document.querySelector(".cart-quantity").textContent=cartQuentity;

    localStorage.setItem("cartQuentity",cartQuentity);

}

function loadCartQuentity(){
    const savedCartQuentity=localStorage.getItem("cartQuentity");
    if(savedCartQuentity){
        document.querySelector(".cart-quantity").textContent=savedCartQuentity;
    }else{
        document.querySelector(".cart-quantity").textContent=0;
    }
}



// Event listener for Add to Cart buttons
document.querySelectorAll(".js-add-button").forEach(button => {
    button.addEventListener("click", () => {
        const productId = button.dataset.productId;
        const productPrice = button.dataset.productPrice;

        // Get the corresponding quantity value from the dropdown
        const quantitySelect = document.querySelector(`.product-quantity[data-product-id="${productId}"]`);
        const selectedQuantity =parseInt(quantitySelect.value);


        addToCart(productId,selectedQuantity,productPrice);
        
        updateCart();

       
        // console.log(cartQuentity);
        // console.log(cart); // Output the cart to see the updated items
    });
});

loadCartQuentity();
