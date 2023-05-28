import header from "./header.js";
import productFunc from "./product.js";
import searchFunc from "./search.js";

export default (async function () {
  const datas = await fetch("../js/data.json");
  const data = await datas.json();
  data ? localStorage.setItem("products", JSON.stringify(data)) : [];

  productFunc();
  searchFunc(data);
})();

const cardItems = document.querySelector(".header-cart-count");
cardItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";

const modalCloseBtn = document.querySelector(".modal-close");
const modalDialog = document.querySelector(".modal-dialog");
const modalContent = document.querySelector(".modal-content");

modalCloseBtn.addEventListener("click", () => {
  modalDialog.classList.remove("show");
});

setTimeout(() => {
  modalDialog.classList.add("show");
}, 3000);

document.addEventListener("click", function (e) {
  if (!e.composedPath().includes(modalContent)) {
    modalDialog.classList.remove("show");
  }
});
