let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

export function colorActive() {
  const color = document.querySelectorAll(".color-wrapper");

  color.forEach((element) => {
    element.addEventListener("click", () => {
      color.forEach((item) => {
        item.classList.remove("active");
      });
      element.classList.add("active");
    });
  });
}

export function sizeAcitve() {
  const size = document.querySelectorAll(".values-list-item");
  size.forEach((element) => {
    element.addEventListener("click", () => {
      size.forEach((item) => {
        item.classList.remove("active");
      });
      element.classList.add("active");
    });
  });
}

export function quantityFunc() {
  const data = JSON.parse(localStorage.getItem("products"));
  const cardItems = document.querySelector(".header-cart-count");
  const quantityValueBtn = document.querySelector(".quantity-value");
  const cartAdd = document.querySelector(".add-cart");
  const productid = JSON.parse(localStorage.getItem("producksID"));
  const findProduct = data.find((item) => item.id === Number(productid));
  const findCart = cart.find((item) => item.id === Number(productid));

  if (findCart) {
    cartAdd.setAttribute("disabled", "disabled");
  } else {
    cartAdd.addEventListener("click", function (e) {
      e.preventDefault();
      const quantityValue = quantityValueBtn.value;
      cart.push({ ...findProduct, quantity: quantityValue });
      localStorage.setItem("cart", JSON.stringify(cart));
      cardItems.innerHTML = cart.length;
      cartAdd.setAttribute("disabled", "disabled");
    });
  }
}
