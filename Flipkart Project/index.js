const products = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqaUx796j3oN9x9DvyJBsy85Mf1-GICToxTA&s',
        title: 'Sample Product 1',
        price: '$22.45',
        id: 'pro1'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqaUx796j3oN9x9DvyJBsy85Mf1-GICToxTA&s',
        title: 'Sample Product 2',
        price: '$30.99',
        id: 'pro2'
    }
];

// Initialize an empty cart
const cart = [];

products.forEach(product => {
    const cartHtml = `
    <div class="product-cart">
        <img src="${product.image}" alt="" class="product-image">
    
        <h2 class="product-title">${product.title}</h2>
    
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

// Event listener for Add to Cart buttons
document.querySelectorAll(".js-add-button").forEach(button => {
    button.addEventListener("click", () => {
        const productId = button.dataset.productId;
        const productPrice = button.dataset.productPrice;

        // Get the corresponding quantity value from the dropdown
        const quantitySelect = document.querySelector(`.product-quantity[data-product-id="${productId}"]`);
        const selectedQuantity =parseInt(quantitySelect.value);


        // to check product is already added or not if added just increasing the quentity else add the product in the cart
        let matching;
        cart.forEach((item)=>{
            if(productId===item.productId){
                matching=item;
            }
        });

        if(matching){
            matching.quantity+=selectedQuantity;
        }else{
             // Add the product with selected quantity to the cart
            cart.push({
            productId: productId,
            quantity: selectedQuantity,
            price: productPrice
            });
        }


        let cartQuentity=0;
        cart.forEach((item)=>{
            cartQuentity+=item.quantity;
        })


        document.querySelector(".cart-quantity").textContent=cartQuentity;

        console.log(cartQuentity);
        console.log(cart); // Output the cart to see the updated items
    });
});
