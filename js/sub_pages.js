// 서브페이지 JS

$(()=>{
  console.log("서브페이지 JS파일 로딩 완료");
  
  // 매장 안내 페이지의 스와이퍼
  if($(".shopInfoBanner").length){
    console.log('스와이퍼 배너 있음');
    var swiper = new Swiper(".shopInfoBanner", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }


  const accordion__panel = $(".accordion__panel");
  // 처음부터 펼쳐져있는(.spread) 아코디언의 경우
  accordion__panel.hide();
  if($(".spread").length){
    // aria-expanded속성이 true인 패널 펼쳐놓기
    console.log("스프레드 아코디언 있음!");
    $(".spread").find(".accordion__panel").eq(0).show();
  }

  
  const accordion__trigger = $(".accordion__trigger");
  accordion__trigger.click(function(){
    // 모든 아코디언트리거의 aria-expanded속성 false로 초기화
    accordion__trigger.attr("aria-expanded", "false");

    // 클릭한 아코디언트리거에 active 클래스 토글
    $(this).toggleClass("active");
    // 클릭한 아코디언트리거의 aria-expanded속성 true로 변경
    $(this).attr("aria-expanded", "true");
    // 나머지 아코디언트리거에서 active 클래스 제거
    accordion__trigger.not($(this)).removeClass("active");

    const controlId = $(this).attr("aria-controls");
    // aria-controls와 같은 id를 가진 패널 슬라이드 토글 하기
    $(`#${controlId}`).slideToggle(300);
    // 자기 자신 제외한 나머지 패널 모두 슬라이드 업하기
    accordion__panel.not(`#${controlId}`).slideUp(300);
  });

  // 탭버튼 클릭시 탭 패널에 active 클래스 추가하여 보이기
  const tab__button = $("button[role='tab']");
  const tab__panel = $("div[role='tabpanel']");
  tab__button.click(function(){
    // 클릭된 자신의 형제 탭버튼 "aria-selected" 속성 false로 바꾸기
    $(this).siblings().attr("aria-selected", "false");
    // 클릭된 자신과 같은 권역의 탭 패널의 클래스에서 active 지우기
    $(this).parent().siblings().children("div[role='tabpanel']").removeClass("active");
    // 클릭된 자신의 "aria-selected" 속성 ture로 바꾸기
    $(this).attr("aria-selected", "true");
    // 클릭된 자신의 "aria-controls" 속성과 일치하는 id를 가진 탭 패널에 active클래스 추가하기
    let tab__panelID = $(this).attr("aria-controls");
    $(`#${tab__panelID}`).addClass("active");
  });

  // "구매하기" 버튼 클릭시 새 창으로 모바일 버전 사이트 열기
  const buy__button = $("div[role='tabpanel'] .link");
  buy__button.click(function(){
    window.open($(this).attr("href"), '_blank', "noreferrer, width=430, height=800");
    return false;
  });


});