// 윈도우 로드시 실행
window.addEventListener("DOMContentLoaded", ()=>{

  ////////// 러쉬 소개 스와이퍼 //////////
  const lushInfo_swiper = new Swiper(".lushInfo__banner", {
    slidesPerView: "auto",
    spaceBetween: 80,
  });





  ////////// 제품 소개 내부 스와이퍼 //////////
  const $subSwiper = $(".subSwiper");
  const subSwiper_arr = [];

  $subSwiper.each(function(){
    const autoSwiper= new Swiper(this, {
      // slidesPerView: 'auto',
      slidesPerView: 3,
      // slidesPerGroup: 1,
      // loop: true,
      grabCursor: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      on: {
        // 스와이퍼가 마지막 슬라이드에 도달하면 이벤트 발생
        reachEnd: function(){
        // 메인 스와이퍼 다음 슬라이드로 넘어가기
        mainSwiper.slideNext();
        }
      }
    });

    // 내부 스와이퍼의 슬라이드에 마우스엔터시 멈춤
    $('.subSwiper .swiper-slide').on('mouseenter', function(){
      console.log("마우스엔터");
      autoSwiper.autoplay.stop();
    });
    // 내부 스와이퍼의 슬라이드에 마우스리브시 동작
    $('.subSwiper .swiper-slide').on('mouseleave', function(){
      autoSwiper.autoplay.start();
    });

    // 내부 스와이퍼들 배열에 넣기
    subSwiper_arr.push(autoSwiper);
  });

  // 오토플레이 초기화
  function init(){
    subSwiper_arr.forEach(function(ele){
      ele.autoplay.stop();
    })
  }
  init();

  // 제품 소개 메인 스와이퍼
  const mainSwiper = new Swiper(".mainSwiper", {
    effect: 'fade',
    speed: 500,
    fadeEffect: {
      // crossFade: false,
      crossFade: true,
    },
    grabCursor: true,
    rewind : true,                           
    pagination: { 
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
      slideChange: function(){
        // 서브 스와이퍼 오토플레이 초기화
        init();
        // 서브 스와이퍼 첫 슬라이드로 이동
        subSwiper_arr[mainSwiper.realIndex].slideTo(0, 0, false);
        // 서브 스와이퍼 오토플레이 시작
        subSwiper_arr[mainSwiper.realIndex].autoplay.start();
      }
    }
  });
  // 맨 처음 서브 스와이퍼 오토플레이 가동
  subSwiper_arr[0].autoplay.start();


  ////////// 롤링 배너 //////////
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
