function sideBarFunc() {
  const btnOpenSidebar = document.querySelector(".header-mobile");
  const btnCloseSidebar = document.querySelector(".closeBtn");
  const Sidebar = document.querySelector(".header-center");

  btnOpenSidebar.addEventListener("click", () => {
    Sidebar.classList.add("active");
  });

  btnCloseSidebar.addEventListener("click", () => {
    Sidebar.classList.remove("active");
  });

  // document.onclick = function (e) {
  //   if (e.target.id !== "stopSideBar" && e.target.id !== "closeSidebar") {
  //     Sidebar.classList.remove("active");
  //   }
  // };

  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(Sidebar) &&
      !e.composedPath().includes(btnOpenSidebar)
    ) {
      Sidebar.classList.remove("active");
    }
  });
}
function searchModalFunc() {
  const btnOpenModalSearch = document.querySelector(".toggle-button");
  const btnCloseModalSearch = document.querySelector(".btnCloseModalSearch");
  const modalSearch = document.querySelector(".modal-search ");
  const modalSearchWrapper = document.querySelector(".modal-wrapper");

  btnOpenModalSearch.addEventListener("click", () => {
    modalSearch.classList.add("active");
  });

  btnCloseModalSearch.addEventListener("click", () => {
    modalSearch.classList.remove("active");
  });

  // document.onclick = function (e) {
  //   if (e.target.id !== "stopModalSearch" && e.target.id !== "openSideBar") {
  //     modalSearch.classList.remove("active");
  //   }
  // };

  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(modalSearchWrapper) &&
      !e.composedPath().includes(btnOpenModalSearch)
    ) {
      modalSearch.classList.remove("active");
    }
  });
}

function headerFunc() {
  sideBarFunc();
  searchModalFunc();
}

export default headerFunc();
