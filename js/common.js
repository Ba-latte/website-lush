// 공통 부분

$(()=>{
  console.log("공통 부분 js 로딩 완료");
  
  const window_height = $(window).height();
  const contentBox_height = $("main>section:first-of-type>.contentBox").height();
  const check_height = contentBox_height + (window_height * 0.2);
  console.log(check_height);
  
  // 스크롤시 헤더에 active 클래스 부여해서 활성화
  window.addEventListener("scroll", ()=>{
    // console.log(window.scrollY);
    if(window.scrollY >= check_height){
      console.log("넘었어!");
      // 헤더에 클래스 active를 부여해서 색상 반전
      $("header").addClass("active");
    }
    else{
      console.log("안 넘었어!");
      // 헤더에서 클래스 active 제거
      $("header").removeClass("active");
    }
  });
});