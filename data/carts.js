export const cart = [];

export function addcart(id) { 
  for (let item of cart) {
    if (item.id === id) {
      item.quantity += 1;
      console.log(cart);
      
      return;
    }
    }   
    cart.push({id : id, quantity: 1});
     
  
    console.log(cart);   
} ; 

