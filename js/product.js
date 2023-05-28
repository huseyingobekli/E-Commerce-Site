import { glide2 } from "../js/glide.js";
import { glide1 } from "../js/glide.js";

let products = [];

let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

function addToCart() {
  const cardItems = document.querySelector(".header-cart-count");
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      const inCart = cart.find((item) => item.id === Number(button.dataset.id));

      if (inCart) {
        button.setAttribute("disabled", "disabled");
      } else {
        const id = e.target.dataset.id;
        const findProduct = products.find(
          (product) => product.id === Number(id)
        );

        cart.push({ ...findProduct, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        button.setAttribute("disabled", "disabled");
        cardItems.innerHTML = cart.length;
      }
    });
  });
}
function productRoute() {
  const productLink = document.querySelectorAll(".producks-links");
  productLink.forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      const producksID = e.target.dataset.id;
      localStorage.setItem("producksID", JSON.stringify(producksID));
      window.location.href = "single-product.html";
    });
  });
}

function productFunc() {
  products = JSON.parse(localStorage.getItem("products"));
  const productList = document.querySelector("#product-list");
  const productList2 = document.querySelector("#product-list2");

  let resutls = "";
  products.forEach((item) => {
    resutls += `
    <li class="glide__slide product-item">
    <div class="product-image">
    <a href="">
        <img  class="product-image-front" src=${item.img.singleImage} alt="">
        <img class="product-image-back" src=${item.img.thumbs[1]} alt="">
    </a>
    </div>
    <div class="product-info">      
    <a href="" class="product-tittle">
        ${item.name}
    </a>
    <ul class="product-star">
        <li>
        <i class="bi bi-star-fill"></i>
        </li>
        <li>
        <i class="bi bi-star-fill"></i>
        </li>
        <li>
        <i class="bi bi-star-fill"></i>
        </li>
        <li>
        <i class="bi bi-star-fill"></i>
        </li>
        <li>
        <i class="bi bi-star-half"></i>
        </li>
    </ul> 
    <div class="product-prices">
        <strong class="new-prices">$${item.price.newPrice.toFixed(2)}</strong>
        <span class="old-price">$${item.price.oldPrice.toFixed(2)}</span>
    </div>
    <span class="product-discount">-${item.discount}%</span>
    <div class="product-links">
        <button class ="add-to-cart" data-id = ${item.id}>
        <i class="bi bi-basket-fill"></i>
        </button>
        <button>
        <i class="bi bi-heart-fill"></i>
        </button>
        <a href="" class="producks-links" data-id=${item.id}>
        <i class="bi bi-eye-fill"></i>
        </a>
        <a>
        <i class="bi bi-share"></i>
        </a>
    </div>
    </div>

    </li>`;
    productList ? (productList.innerHTML = resutls) : "";
    productList2 ? (productList2.innerHTML = resutls) : "";
  });
  addToCart();
  glide1();
  glide2();
  productRoute();
}

export default productFunc;
