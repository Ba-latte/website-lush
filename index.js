// import { init, render } from "./js/canvasContainers/MoveGradient.js";

// 윈도우 리사이즈시 캔버스 초기화 함수 실행
// window.addEventListener("resize", init);

// 윈도우 로드시 캔버스 초기화, 렌더 함수 실행
window.addEventListener("DOMContentLoaded", ()=>{
  // init();
  // render();

  const swiper = new Swiper(".lushInfo__banner", {
    slidesPerView: "auto",
    spaceBetween: 80,
  });

});
