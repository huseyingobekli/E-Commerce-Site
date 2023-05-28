function productRoute() {
  const searchResutls = document.querySelectorAll(".result-item ");
  searchResutls.forEach((element) => {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      const productId = element.dataset.id;
      if (productId) {
        localStorage.setItem("producksID", JSON.stringify(productId));
        window.location.href = "single-product.html";
      }
    });
  });
}

function searchFunc(data) {
  const searchResutlsWrapper = document.querySelector(
    ".search-results .results"
  );

  let results = "";

  data.forEach((item) => {
    results += `
    <a href="" class="result-item producks-links" data-id="${item.id}">
              <img src=${item.img.singleImage} class="search-thumb" alt="">
              <div class="search-info">
                <h4>${item.name}</h4>
                <span class="search-sku">SKU: PD0016</span>
                <span class="search-price">$${item.price.newPrice.toFixed(
                  2
                )}</span>
              </div>
            </a>
    `;
    searchResutlsWrapper.innerHTML = results;
  });

  productRoute();

  const searchFormInput = document.querySelector(".search-form input");
  searchFormInput.addEventListener("input", (e) => {
    let filtered = [];
    let results = "";
    let value = e.target.value;
    value = value.trim().toLowerCase();

    filtered = data.filter((item) =>
      item.name.trim().toLowerCase().includes(value)
    );

    if (filtered.length < 2) {
      searchResutlsWrapper.style.gridTemplateColumns = "1fr";
      if (filtered.length < 1) {
        searchResutlsWrapper.innerHTML = `
        <a href="" class="result-item producks-links" style="justify-content:center">
            No Item Found
      </a>
        `;
      } else {
        filtered.forEach((item) => {
          results += `
            <a href="" class="result-item producks-links" data-id="${item.id}">
                      <img src=${
                        item.img.singleImage
                      } class="search-thumb" alt="">
                      <div class="search-info">
                        <h4>${item.name}</h4>
                        <span class="search-sku">SKU: PD0016</span>
                        <span class="search-price">$${item.price.newPrice.toFixed(
                          2
                        )}</span>
                      </div>
                    </a>
            `;
        });
        searchResutlsWrapper.innerHTML = results;
        productRoute();
      }
    } else {
      searchResutlsWrapper.style.gridTemplateColumns = "1fr 1fr";
      filtered.forEach((item) => {
        results += `
          <a href="" class="result-item producks-links" data-id="${item.id}">
                    <img src=${
                      item.img.singleImage
                    } class="search-thumb" alt="">
                    <div class="search-info">
                      <h4>${item.name}</h4>
                      <span class="search-sku">SKU: PD0016</span>
                      <span class="search-price">$${item.price.newPrice.toFixed(
                        2
                      )}</span>
                    </div>
                  </a>
          `;
      });
      searchResutlsWrapper.innerHTML = results;
      productRoute();
    }
  });
}

export default searchFunc;
