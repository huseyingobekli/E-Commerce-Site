export function tabsFunc() {
  const singleTabsWrapper = document.querySelector(".single-tabs-wrapper");
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanels = document.querySelectorAll(".tab-panel-item ");

  singleTabsWrapper.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      tabButtons.forEach((element) => {
        element.classList.remove("active");
      });
      e.target.classList.add("active");

      tabPanels.forEach((element) => {
        element.classList.remove("active");
      });

      const selectPannel = document.getElementById(id);
      selectPannel.classList.add("active");
    }
  });
}

const commentReviewFunc = function () {
  const commentStars = document.querySelectorAll(".stars-active");

  commentStars.forEach((element) => {
    element.addEventListener("click", function (e) {
      commentStars.forEach((item) => item.classList.remove("active"));
      e.preventDefault();
      element.classList.add("active");
    });
  });
};

const addNewCommentFunc = function () {
  let comments = [];
  const commentArea = document.querySelector("#comment-text-area");
  const commentName = document.querySelector("#comment-name");
  const commentSubmitBtn = document.querySelector(".form-submit-button");
  let commentsWrapper = document.querySelector(".comments");
  let commenText = "";
  let commenName = "";

  commentArea.addEventListener("input", function (e) {
    commenText = e.target.value;
  });

  commentName.addEventListener("input", function (e) {
    commenName = e.target.value;
  });

  commentSubmitBtn.addEventListener("click", function (e) {
    console.log(commentsWrapper);
    e.preventDefault();
    let resutls = "";
    comments.push({ text: commenText, name: commenName });

    comments.forEach((element) => {
      resutls += `
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
                          <strong>${element.name}</strong>
                          <span> - </span>
                          <time>            April 23, 2022</time>
                        </div>
                        <p>
                         ${element.text}
                        </p>
                      </div>
                    </div>
        `;
    });
    commentsWrapper.innerHTML = resutls;
    commentArea.value = "";
    commentName.value = "";
  });
};

export function commentFunc() {
  commentReviewFunc();
  addNewCommentFunc();
}
