const productList = document.querySelector("#product-list");

export function glide1() {
  const config1 = {
    type: "carousel",
    perView: 4,
    gap: 20,

    breakpoints: {
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      },
    },
  };

  productList && new Glide(".product-carousel1", config1).mount();
}

export function glide2() {
  const config2 = {
    type: "carousel",
    perView: 4,
    gap: 20,

    breakpoints: {
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      },
    },
  };

  productList && new Glide(".product-carousel2", config2).mount();
}

export function glide3() {
  const config3 = {
    perView: 5,
    breakpoints: {
      992: {
        perView: 4,
      },
      768: {
        perView: 4,
      },
      576: {
        perView: 4,
      },
    },
  };

  new Glide(".glide", config3).mount();
}
