export function zoomFunc() {
  const SingleImgWrapper = document.querySelector(".single-image-wrapper");
  const singleImg = document.querySelector(".single-main-img");

  SingleImgWrapper.addEventListener("mousemove", function (e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    singleImg.style.transformOrigin = `${x}px ${y}px`;
    singleImg.style.transform = "scale(3)";
  });

  SingleImgWrapper.addEventListener("mouseleave", () => {
    singleImg.style.transformOrigin = "center";
    singleImg.style.transform = "scale(1)";
  });
}
