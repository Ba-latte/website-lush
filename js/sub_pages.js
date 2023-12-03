// 서브페이지 JS
console.log("서브페이지 JS파일 로딩 완료");

//////////// 스파 소개 페이지 유튜브 동영상 멈춤/재생 ////////////
if($("#spa_treatment_preview").length){
  let player;
  function onYouTubeIframeAPIReady(){
    player = new YT.Player('spa_treatment_preview', {
      videoId: 'IYfPp9o5E9I',
      loop: true,
      playerVars: {
        'list': 'IYfPp9o5E9I',
        'loop': 1,
      },
      events: {
        'onReady': controlPlayer,
      }
    });
  }
  // 플레이어 재생/멈춤을 컨트롤하는 함수
  function controlPlayer() {
    const window_scrollTop = $(window).scrollTop();
    const playerY = $("#spa_treatment_preview").offset().top;
    const playerHeight = $(".videoBox").height();
    const window_height = $(window).innerHeight();
    
    if( (playerY <= (window_height / 5*4) + window_scrollTop) && (playerY > window_scrollTop - (playerHeight/5*3)) ){
      // console.log("화면에 보이는 중");
      player.playVideo();
      player.mute();
    }
    else{
      // console.log("화면에 안 보이고 있음");
      player.pauseVideo();
    }
  }
  // 스크롤 동작시
  const timer = setTimeout(function(){
    $(window).on('scroll', function(){
      controlPlayer();
    });
  }, 500);
}



//////////// 매장 안내 페이지의 스와이퍼 ////////////
if($(".shopInfoBanner").length){
  console.log('스와이퍼 배너 있음');
  var swiper = new Swiper(".shopInfoBanner", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });
}


//////////// 아코디언 UI ////////////
const accordion__panel = $(".accordion__panel");
const accordion__trigger = $(".accordion__trigger");

// 모든 아코디언 UI의 패널 숨겨두기
accordion__panel.hide();

// 처음부터 펼쳐져있는(.spread) 아코디언의 경우
if($(".spread").length){
  // console.log("스프레드 아코디언 있음!");
  // 첫번째 패널 펼쳐놓기
  $(".spread").find(".accordion__panel").eq(0).show();
}

// 아코디언 트리거 클릭시
accordion__trigger.click(function(){
  const controlId = $(this).attr("aria-controls");

  // 처음부터 펼쳐져있는(.spread) 아코디언의 경우
  if($(".spread").length){
    // 클릭한 트리거에 active 클래스가 있다면
    if($(this).hasClass("active")){
      return
    }
    // active 클래스가 없다면
    else{
      // 클래스 active 부여, aria-expanded속성 true로 변경
      $(this).addClass("active").attr("aria-expanded", "true");
      // 나머지 아코디언트리거에서 active 클래스 제거, aria-expanded속성 false로 변경
      accordion__trigger.not($(this)).removeClass("active").attr("aria-expanded", "false");

      // // aria-controls와 같은 id를 가진 패널 슬라이드 토글 하기
      $(`#${controlId}`).slideToggle(300);
      // // 자기 자신 제외한 나머지 패널 모두 슬라이드 업하기
      accordion__panel.not(`#${controlId}`).slideUp(300);
    }

    // 트리거 클릭시 이미지, 텍스트 변경
    if($("#branchInfo__accordionGroup").find(".accordion__trigger").eq(1).hasClass("active")){
      $(".branchInfo>figure>img").attr("src", "../assets/images/spa/spa_kyung@3x.jpg");
      $(".branchInfo>figure>figcaption").text("가로수길점 매장 내부");
    }
    else{
      $(".branchInfo>figure>img").attr("src", "../assets/images/spa/spa_apgu@3x.jpg");
      $(".branchInfo>figure>figcaption").text("압구정점 매장 내부");
    }
  }
  // 일반적인 아코디언의 경우
  else{
    // 모든 아코디언트리거의 aria-expanded속성 false로 초기화
    accordion__trigger.attr("aria-expanded", "false");

    // 클릭한 아코디언트리거에 active 클래스 토글
    $(this).toggleClass("active");
    // 클릭한 아코디언트리거의 aria-expanded속성 true로 변경
    $(this).attr("aria-expanded", "true");
    // 나머지 아코디언트리거에서 active 클래스 제거
    accordion__trigger.not($(this)).removeClass("active");
    
    // aria-controls와 같은 id를 가진 패널 슬라이드 토글 하기
    $(`#${controlId}`).slideToggle(300);
    // 자기 자신 제외한 나머지 패널 모두 슬라이드 업하기
    accordion__panel.not(`#${controlId}`).slideUp(300);
  }
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


// 스파 이용 안내 페이지의 이미지 애니메이션
let intervalControll = false;

function imageAnimation(category, time){
  const imgTag = $(`${category} .sequenceBox > li > img`);
  let indexNumber = 0;
  // 첫번째 이미지 태그 src 변경
  imgTag.eq(indexNumber).attr('src', function(idx, attr){
    return attr.replace('off@2x', 'active@2x');
  });
  // 시간 간격을 두고 첫번째 이미지 태그 src를 원래대로 복구, 다음번째 이미지 태그 src 변경
  setInterval(function(){
    // console.log("실행중");
    imgTag.eq(indexNumber).attr('src', function(idx, attr){
      return attr.replace('active@2x', 'off@2x');
    });

    // index번호 다음번째로 바꾸기
    indexNumber = (indexNumber + 1) % imgTag.length;

    imgTag.eq(indexNumber).attr('src', function(idx, attr){
      return attr.replace('off@2x', 'active@2x');
    });
  }, time);
}

if($(".step").length){
  imageAnimation('.howToBuy', 1500);
  imageAnimation('.howToReservation', 1500);
}