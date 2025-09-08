
import { cart } from '../data/carts.js';
import { products } from '../data/products.js';

products.forEach( (product) => {
    const HtmlString = `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars *10}.png ">
            <div class="product-rating-count link-primary">
              87
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100)   .toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button data-product-id = "${product.id}" class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>`;
        console.log(HtmlString);
        document.querySelector('.js-products-grid').innerHTML += HtmlString;

    })

document.querySelectorAll('.add-to-cart-button').forEach( (button) => {
button.addEventListener('click', (event) => {
    console.log(button.dataset.productId);
    if (checkcart(button.dataset.productId) ){
        console.log(cart);
        return;
    }
    cart.push({id : button.dataset.productId, quantity: 1});
    console.log(cart);
    
})
})  

function checkcart(id) { 
  for (let item of cart) {
    if (item.id === id) {
      item.quantity += 1;
      return true; 
    }
  }
  return false; 
}
