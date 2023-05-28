let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

let cartSubtotal = 0;

function displayCartProduct() {
  const cartList = document.querySelector(".cart-wrapper");

  cartSubtotal = 0;
  let result = "";
  cart.forEach((element) => {
    result += `

      <tr class="cart-item">
      <td></td>
      <td class="cart-image">
          <img src=${element.img.singleImage} alt="">
          <i id="delete-cart" class="bi bi-x delete-cart" data-id =${
            element.id
          } ></i>
      </td>
      <td>${element.name}</td>
      <td >$${element.price.newPrice}</td>
      <td class="product-quaintity">${element.quantity}</td>
      <td class="product-subtotal">$ ${
        element.price.newPrice * element.quantity
      }</td>

  </tr>
  `;
  });

  cartList.innerHTML = result;
  deleteCartItem();
}

displayCartProduct();

function deleteCartItem() {
  const deleteItemButtons = document.querySelectorAll("#delete-cart");
  const cardItems = document.querySelector(".header-cart-count");
  deleteItemButtons.forEach((element) => {
    element.addEventListener("click", function (e) {
      const id = e.target.dataset.id;
      cart = cart.filter((item) => item.id !== Number(id));
      displayCartProduct();
      localStorage.setItem("cart", JSON.stringify(cart));
      cardItems.innerHTML = cart.length;
      cardValues();
    });
  });
}

function cardValues() {
  const cartSubtotalBtn = document.querySelector(".cart-subtotal");
  const cartTotalBtn = document.querySelector(".cart-total");
  const fastCargo = document.querySelector("#fast-cargo");
  const fastCargoPrice = 15;

  if (cart.length > 0) {
    cart.map((item) => {
      cartSubtotal += item.price.newPrice * item.quantity;
    });
    cartSubtotalBtn.innerHTML = `$${cartSubtotal.toFixed(2)}`;
    cartTotalBtn.innerHTML = `$${cartSubtotal.toFixed(2)}`;
  } else {
    cartSubtotalBtn.innerHTML = `$0`;
    cartTotalBtn.innerHTML = `$0`;
  }

  if (cart.length > 0) {
    fastCargo.addEventListener("change", function (e) {
      if (e.target.checked) {
        cartTotalBtn.innerHTML = `$${(cartSubtotal + fastCargoPrice).toFixed(
          2
        )}`;
      } else {
        cartTotalBtn.innerHTML = `$${cartSubtotal.toFixed(2)}`;
      }
    });
  } else {
    fastCargo.setAttribute("disabled", "disabled");
  }
}
cardValues();
