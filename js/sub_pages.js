// 서브페이지 JS

$(()=>{
  console.log("서브페이지 JS파일 로딩 완료");
  
  var swiper = new Swiper(".shopInfoBanner", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // 모든 패널 슬라이드 업하여 숨기기
  const accordion__panel = $(".accordion__panel");
  accordion__panel.hide();

  $(".accordion__trigger").click(function(){
    // 클릭한 아코디언트리거에 active 클래스 토글
    $(this).toggleClass("active");
    // 나머지 아코디언트리거에서 active 클래스 제거
    $(".accordion__trigger").not($(this)).removeClass("active");

    const controlId = $(this).attr("aria-controls");
    // aria-controls와 같은 id를 가진 패널 슬라이드 토글 하기
    $(`#${controlId}`).slideToggle(300);
    // 자기 자신 제외한 나머지 패널 모두 슬라이드 업하기
    accordion__panel.not(`#${controlId}`).slideUp(300);
  });
});