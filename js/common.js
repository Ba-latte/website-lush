// 공통 부분

const window_width = $(window).width();
const window_height = $(window).height();
// 최상단 배너의 콘텐츠 박스 높이
const contentBox_height = $("main>section:first-of-type>.contentBox").height();
// 스크롤 넘어간 것 감지할 높이값
const check_height = contentBox_height + (window_height * 0.2);
// 모바일 사이즈 확인
let isMobile = false;

function handleHeaderActive(){
  // 최상단 배너의 콘텐츠 박스의 위치 감지하여 넘어가는 경우
  if(window.scrollY >= check_height){
    // console.log("넘었어!");
    // 헤더에 클래스 active를 부여해서 색상 반전
    $("header").addClass("active");
  }
  else{
    // console.log("안 넘었어!");
    // 헤더에서 클래스 active 제거
    $("header").removeClass("active");
  }
}


// 스크롤 방향 감지 위한, 스크롤 위치값 담기
let prevScroll = window.scrollY || 0;
// 스크롤 방향값 담기
let direction;
function handleHeaderHide(height){
  // 현재 스크롤 위치 감지
  let currentScroll = window.scrollY;
  // 이전 스크롤 위치값에서 현재 스크롤 위치값 빼서, 스크롤 이동 방향 결정하기 (1 : 내려가는 방향 / -1 : 올라가는 방향)
  direction = currentScroll - prevScroll > 0 ? 1 : -1;
  // 이전 스크롤 위치값 업데이트
  prevScroll = currentScroll;
  // console.log("방향: ", direction);

  // 올라가는 경우
  if(direction == -1){
    // 헤더 보이기
    $("header").css({
      transform: "translateY(0px)",
    });
    // $(".lnb").addClass("extension");
    $(".lnb").css({
      transform: `translateY(${height}px)`,
      transition: `transform .3s`
    });
  }
  // 내려가는 경우
  else{
    // $(".lnb").removeClass("extension");
    // 헤더 숨기기
    $("header").css({
      transform: `translateY(-${height}px)`,
    })
    $(".lnb").css({
      transform: `translateY(0px)`,
    });
  }
}


function handleLnbActive(height){
  const lnb_height = $(".lnb").outerHeight() / 2;
  // 윈도우 높이(최상단 배너의 높이)를 넘어가는 경우
  if(window.scrollY >= window_height - $("header").outerHeight() + lnb_height){
    // console.log("최상단 배너 넘어갔음!");
    // lnb 박스에 클래스 active 부여해서 화면에 고정
    $(".lnb").addClass("active");
    isMobile == true ? handleHeaderHide(110) : handleHeaderHide(71);
  }
  else{
    // lnb 박스에서 클래스 active 제거
    $(".lnb").removeClass("active");
  }
}

// 스크롤시 헤더에 active 클래스 부여해서 활성화
window.addEventListener("scroll", ()=>{
  handleHeaderActive();
  handleLnbActive(71);
});
// 윈도우 새로고침시 헤더 영역 애니메이션 수정
window.addEventListener('load', ()=>{
  window_width <= 767 ? isMobile = true : isMobile = false;
});
// 윈도우 리사이즈시 헤더 영역 애니메이션 수정
window.addEventListener('resize', ()=>{
  window_width <= 767 ? isMobile = true : isMobile = false;
});


////////// QR코드 미니창 열기/닫기 //////////
const qrBox = document.querySelector(".qrBox");
const closeBtn = document.querySelector(".qrBox>button");
const storeBtn = document.querySelector(".goStore");
const cacaoBtn = $(".goKakao");
closeBtn.addEventListener("click", ()=>{
  qrBox.style.display="none";
});
storeBtn.addEventListener("click", ()=>{
  qrBox.style.display="flex";
});
cacaoBtn.on('click', function(event){
  event.preventDefault();
  alert("준비중입니다.");
});


////////// 위로 올라가기(.goTop) 버튼 클릭시 해당 페이지 맨 위로 올라가기 //////////
const goTopBtn = $(".goTop");
goTopBtn.click(function(){
  window.scrollTo({top: 0, left: 0, behavior: "smooth"});
});
