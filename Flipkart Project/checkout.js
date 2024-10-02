import { cart } from "./data/cart.js";
import { products } from "./data/products.js";



let cartSummeryHTML="";
cart.forEach((cartItem,index)=>{

    let productId=cartItem.productId;
    let matching;

    products.forEach((product)=>{
        if(product.id==productId){
            matching=product;
        }
    })

    // console.log(cart[0].quantity)

cartSummeryHTML+=
    `
         <div class="product-container">
                <div class="section1">
                    <img src="${matching.image}" alt="T-Shirt">
                </div>
                <div class="section2">
                    <p>${matching.title}</p>
                    <p>Size M</p>
                    <p>Seller XYZ Pvt Ltd</p>
                    <p>&#x20B9; <span>${matching.price}</span></p>
                    <p>quantity: ${cart[index].quantity} 
                    <span><button class="remove">Remove</button></span></p>
                    
                </div>
                <div class="section3">
                    <p>Delivery by Sat Oct 5 | ₹40 Free</p>
                </div>
            </div>
    
    `;
})

document.querySelector(".container1").innerHTML=cartSummeryHTML;

