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


  const rollingBanner = document.querySelector(".rollingBanner .wrapper");
  rollingBanner.id = "wrapper01";
  const newWrapper02 = rollingBanner.cloneNode(true);
  const newWrapper03 = rollingBanner.cloneNode(true);
  // cloneNode()함수 사용해서 노드 복사하면 id도 그대로 복사돼 유일성 깨짐 방지 위함
  newWrapper02.id = "wrapper02";
  newWrapper03.id = "wrapper03";

  rollingBanner.after(newWrapper03);
  rollingBanner.after(newWrapper02);
});
