// 윈도우 로드시 실행
window.addEventListener("DOMContentLoaded", ()=>{

  // 러쉬 소개 스와이퍼
  const swiper = new Swiper(".lushInfo__banner", {
    slidesPerView: "auto",
    spaceBetween: 80,
  });

  const category1 = document.querySelector(".category1");
  const category2 = document.querySelector(".category2");

  // 내부 스와이퍼
  const innerSwiper = new Swiper(`.productsInfo>.category1 .slideBanner`, {
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    on: {
      // 스와이퍼가 첫번째 슬라이드에 도달하면 이벤트 발생
      reachBeginning: function(){
        console.log("첫번째 내부 슬라이드 시작");
        innerSwiper.autoplay.resume();
      },
      // 스와이퍼가 마지막 슬라이드에 도달하면 이벤트 발생
      reachEnd: function(){
        console.log("첫번째 내부 슬라이드 끝");
        // 내부 스와이퍼 자동 재생 멈추기
        innerSwiper.autoplay.stop();
        category1.style.opacity = "0";
        category2.style.opacity = "1";
        innerSwiper2.autoplay.start();
      }
    }
  });
  innerSwiper.autoplay.start();
  const innerSwiper2 = new Swiper(".productsInfo>.category2 .slideBanner", {
    slidesPerView: 3,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    on: {
      // 스와이퍼가 첫번째 슬라이드에 도달하면 이벤트 발생
      reachBeginning: function(){
        console.log("두번째 내부 슬라이드 시작");
        category2.style.opacity = "0";
        category1.style.opacity = "1";
        innerSwiper2.autoplay.stop();
        innerSwiper.autoplay.start();
      },
      // 스와이퍼가 마지막 슬라이드에 도달하면 이벤트 발생
      reachEnd: function(){
        console.log("두번째 내부 슬라이드 끝");
        // 내부 스와이퍼 자동 재생 멈추기
        innerSwiper2.autoplay.stop();

      }
    }
  });
  innerSwiper2.autoplay.stop();


  // QR코드 미니창 열기/닫기
  const qrBox = document.querySelector(".qrBox");
  const closeBtn = document.querySelector(".qrBox>button");
  const storeBtn = document.querySelector(".goStore");
  closeBtn.addEventListener("click", ()=>{
    qrBox.style.display="none";
  });
  storeBtn.addEventListener("click", ()=>{
    qrBox.style.display="flex";
  });

  // 롤링 배너
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
