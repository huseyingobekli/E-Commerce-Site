import { glide3 } from "../js/glide.js";
import { zoomFunc } from "../js/zoom.js";
import { colorActive } from "../js/active.js";
import { sizeAcitve } from "../js/active.js";
import { quantityFunc } from "../js/active.js";
import { tabsFunc } from "../js/tabs.js";
import { commentFunc } from "../js/tabs.js";

let products = JSON.parse(localStorage.getItem("products"));
let productsId = JSON.parse(localStorage.getItem("producksID"));

function displaySinglePorduct() {
  const singleProductWrapper = document.querySelector(
    ".single-product-wrapper"
  );

  const findPorudct = products.find((item) => item.id === Number(productsId));

  singleProductWrapper.innerHTML = `
          <div class="single-topbar">
          <nav class="breadcrumb">
              <ul class="breadcrumb-list">
                  <li class="breadcrumb-list-item">
                      <a href="">
                          Home
                      </a>
                  </li>
                  <li class="breadcrumb-list-item">
                      <a href="">
                          Man
                      </a>
                  </li>
                  <li class="breadcrumb-list-item">
                      <a href="">
                          Pants
                      </a>
                  </li>
                  <li class="breadcrumb-list-item">
                  ${findPorudct.name}
                  </li>
              </ul>
          </nav>
      </div>
      <div class="single-content">
          <main class="site-main">
              <div class="product-gallery">
                  <div class="single-image-wrapper">
                      <img class="single-main-img" src=${
                        findPorudct.img.singleImage
                      } alt="">
                  </div>

                  <div class="product-thumb glide">
                  <div class="glide__track" data-glide-el="track">
                    <ol class="glide__slides gallery-thumbs">
                        <li class="glide__slide">
                            <img src=${
                              findPorudct.img.thumbs[0]
                            } alt="" class="active product-thumb-img">
                        </li>
                        <li class="glide__slide">
                            <img src=${
                              findPorudct.img.thumbs[1]
                            } alt="" class= "product-thumb-img">
                        </li>
                        <li class="glide__slide">
                            <img src=${
                              findPorudct.img.thumbs[2]
                            } alt="" class= "product-thumb-img">
                        </li>
                    </ol>
                  </div>
                  <div class="glide__arrows" data-glide-el="controls">
                  <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><i class="bi bi-chevron-left"></i></button>
                  <button class="glide__arrow glide__arrow--right" data-glide-dir=">"><i class="bi bi-chevron-right"></i></button>
                </div>
                </div>


              </div>
              <div class="product-info">
                  <h1 class="product-title">${findPorudct.name}
                  </h1>
                  <div class="product-review">
                      <ul class="star-list">
                          <li><i class="bi bi-star-fill
                            "></i></li>
                          <li><i class="bi bi-star-fill"></i></li>                                    <li><i class="bi bi-star-fill"></i></li>                                    <li><i class="bi bi-star-fill"></i></li>                                    <li><i class="bi bi-star-half"></i></li>
                      </ul>
                      <span>2 reviews</span>
                  </div>
                  <div class="product-price">
                      <s class="old-price">$${findPorudct.price.oldPrice.toFixed(
                        2
                      )}</s>
                      <strong class="new-price">$${findPorudct.price.newPrice.toFixed(
                        2
                      )}</strong>
                  </div>
                  <p class="product-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <form action="" class="variations-form">
                      <div class="variations">
                          <div class="colors">
                              <div class="colors-label">
                                  <span>Color</span>
                              </div>
                              <div class="colors-wrapper">
                                 <div class="color-wrapper">
                                     <label for="" class="blue-color">
                                      <input type="radio" name="product_color">
                                     </label>
                                 </div>
                                 <div class="color-wrapper">
                                  <label for="" class="red-color">
                                   <input type="radio" name="product_color">
                                  </label>
                              </div>
                              <div class="color-wrapper">
                                  <label for="" class="green-color">
                                   <input type="radio" name="product_color">
                                  </label>
                              </div>
                              <div class="color-wrapper">
                                  <label for="" class="purple-color">
                                   <input type="radio" name="product_color">
                                  </label>
                              </div>

                                </div>
                          </div>
                          <div class="values">
                              <div class="value-label">
                                  <span>Size</span>
                              </div>
                              <div class="values-list">
                                  <span class="active values-list-item">XS</span>
                                  <span class= "values-list-item">S</span>
                                  <span  class= "values-list-item" >M</span>
                                  <span  class= "values-list-item" >L</span>
                                  <span  class= "values-list-item" >XL</span>
                              </div>

                          </div>
                          <div class="value-buttons">
                            <input class="quantity-value" type="number" value="1" min="1">
                            <button class="btn btn-lg btn-primary add-cart">Add to Cart</button>
                        </div>
                          <div class="product-extra-buttons">
                              <a href="">
                                  <i class="bi bi-globe"></i>
                                  <span>Size Guide</span>
                              </a>
                              <a href="">
                                  <i class="bi bi-heart"></i>
                                  <span> Add to Wislist</span>
                              </a>
                              <a href="">
                                  <i class="bi bi-share"></i>
                                  <span>Share this Product
                                  </span>
                              </a>
                          </div>

                      </div>

                  </form>
                  <div class="divider"></div>
                  <div class="product-meta">
                    <div class="product-sku">
                        <span>SKU:</span>
                        <strong>BE45VGRT</strong>
                    </div>
                    <div class="product-category">
                      <div class="product-sku">
                          <span>Categories:</span>
                          <strong>Pants , Women</strong>
                      </div>
                  </div>
                  <div class="product-tags">
                      <div class="product-sku">
                          <span>Tags</span>
                          <strong> black , white</strong>
                      </div>
                  </div>
                </div>
              </div>
          </main>
      </div>

      <div class="single-tabs-wrapper">
         <ul class="single-tabs-list">
          <li class="single-tabs-item">
            <button href="" id="tab-button-description" class="tab-button active
            " data-id = "desc";>Description</button>
          </li>
          <li class="single-tabs-item">
            <button href="" id="tab-button-information"  class="tab-button " data-id = "info">Additional information</button>
          </li>
          <li class="single-tabs-item">
            <button href=""id="tab-button-reviews"  class="tab-button" data-id = "review">Reviews</button>
          </li>
         </ul>

         <div class="tab-panel">
            <div id="desc" class="tab-panel-item tab-panel-description 
            ">
              <p>
                Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor
              </p>
              <br>
              <p>
                Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor
              </p>
            </div>
            <div id="info" class="tab-panel-item tab-panel-information">
              <h3 class="tab-panel-information-tittle">
                Additional information
              </h3>
              <table>
                <tbody>
                  <tr>
                    <th>Color</th>
                    <td>Apple Red, Bio Blue, Sweet Orange, Blue, Green, Pink, Black, White</td>
                  </tr>
                  <tr>
                    <th>Size</th>
                    <td>
                      XXS, XS, S, M, L, XL, XXL</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div id="review" class="tab-panel-item tab-panel-reviews active">
              <h3>Reviews for Basic Colored Sweatpants With Elastic Hems</h3>
              <div class="comments">
                <div class="comment">
                  <div class="comment-image">
                    <img src="img/avatars/avatar1.jpg" alt="">
                  </div>
                  <div class="comment-text">
                    <div class="comment-stars">
                      <ul>
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
                          <i class="bi bi-star-fill"></i>
                        </li>
                      </ul>
                    </div>
                    <div class="comment-details">
                      <strong>Admin</strong>
                      <span> - </span>
                      <time>            April 23, 2022</time>
                    </div>
                    <p>
                      Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                    </p>
                  </div>
                </div>
                <div class="comment">
                  <div class="comment-image">
                    <img src="img/avatars/avatar1.jpg" alt="">
                  </div>
                  <div class="comment-text">
                    <div class="comment-stars">
                      <ul>
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
                          <i class="bi bi-star-fill"></i>
                        </li>
                      </ul>
                    </div>
                    <div class="comment-details">
                      <strong>Admin</strong>
                      <span> - </span>
                      <time>            April 23, 2022</time>
                    </div>
                    <p>
                      Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                    </p>
                  </div>
                </div>
              </div>
              <div class="review-form-wrapper">
                <h2>Add a review</h2>
                <form action="" class="comment-form">
                  <p class="comment-notes">Your email address will not be published. Required fields are marked <span>*</span></p>
                  <div class="comment-rating">

                    <label for="">
                      Your comment-rating
                      <span class="required">*</span>
                    </label>

                  <div class="stars">
                    <a class="stars-active" href="">
                      <i class="bi bi-star-fill "></i>
                    </a>
                    <a class="stars-active" href="">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </a>
                    <a class="stars-active" href="">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </a>
                    <a class="stars-active" href="">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </a>
                    <a class="stars-active" href="">
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                    </a>
                  </div>

                  </div>
                  <div class="comment-form-comment form-comment">
                    <label for="">
                      Your review
                      <span class="required">*</span>
                    </label>
                    <textarea name="" id="comment-text-area" cols="30" rows="10"></textarea>
                  </div>
                  <div class="comment-form-author form-comment ">
                    <label for="">
                      Name
                      <span
                      class="required">*</span>
                    </label>
                    <input id="comment-name" type="text">
                  </div>
                  <div class="comment-form-email form-comment ">
                    <label for="">
                      Email
                      <span
                      class="required">*</span>
                    </label>
                    <input type="email">
                  </div>
                  <div class="comment-form-cookies">
                    <input type="checkbox" id="cookies" name="cookies">
                    <label for="cookies">
                      Save my name, email, and website in this browser for the next time I comment.
                    <span class="required">*</span></label>
                  </div>
                  <div class="form-submit">
                    <input  type="submit" class="btn form-submit-button">
                  </div>
                </form>
              </div>
            </div>

         </div>
      </div>

          `;
  glide3();
}
displaySinglePorduct();

function productImage() {
  const productThumbImg = document.querySelectorAll(".product-thumb-img");
  const mainImg = document.querySelector(".single-main-img");

  productThumbImg.forEach((element) => {
    element.addEventListener("click", () => {
      productThumbImg.forEach((item) => {
        item.classList.remove("active");
      });

      element.classList.toggle("active");
      mainImg.src = element.src;
    });
  });
}
productImage();
zoomFunc();
colorActive();
sizeAcitve();
quantityFunc();
tabsFunc();
commentFunc();
