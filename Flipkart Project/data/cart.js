export const cart=[];

 export function addToCart(productId,selectedQuantity,productPrice){

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
}