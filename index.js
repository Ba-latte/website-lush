// 윈도우 로드시 실행
window.addEventListener("DOMContentLoaded", ()=>{

  // 러쉬 소개 스와이퍼
  const lushInfo_swiper = new Swiper(".lushInfo__banner", {
    slidesPerView: "auto",
    spaceBetween: 80,
  });





  // // 제품 소개 내부 스와이퍼
  const $subSwiper = $(".sub-swiper");
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
        console.log("내부 슬라이드 끝");
        // 메인 스와이퍼 다음 슬라이드로 넘어가기
        mainSwiper.slideNext();
        }
      }
    });

    // 내부 스와이퍼의 슬라이드에 마우스엔터시 멈춤
    $('.sub-swiper .swiper-slide').on('mouseenter', function(){
      autoSwiper.autoplay.stop();
    });
    // 내부 스와이퍼의 슬라이드에 마우스리브시 동작
    $('.sub-swiper .swiper-slide').on('mouseleave', function(){
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
    speed:300,
    fadeEffect: {
      crossFade: true,
      // crossFade: false,
    },
    grabCursor: true,
    rewind : true,                           
    // pagination: { 
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    on: {
      slideChange: function(){
        console.log("메인 스와이퍼 페이지 넘어감");
        init();
        subSwiper_arr[mainSwiper.realIndex].slideTo(0, 0, false);
        subSwiper_arr[mainSwiper.realIndex].autoplay.start();
      }
    }
  });
  // subSwiper_arr[0].autoplay.start();


  // const autoSwiper= new Swiper("#test1", {
  //   // slidesPerView: 'auto',
  //   slidesPerView: 3,
  //   // slidesPerGroup: 1,
  //   // loop: true,
  //   grabCursor: true,
  //   autoplay: {
  //     delay: 1000,
  //     disableOnInteraction: false,
  //   },
  //   on: {
  //     // 스와이퍼가 마지막 슬라이드에 도달하면 이벤트 발생
  //     reachEnd: function(){
  //     console.log("내부 슬라이드 끝");
  //     autoSwiper.slideTo(0, 0, false);
  //     // autoSwiper.autoplay.start();
  //     }
  //   }
  // });
  // subSwiper_arr.push(autoSwiper);




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
