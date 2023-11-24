// 유틸 함수

// 최소값과 최대값을 받아서 그 사이의 랜덤값 내보내기
export const randomNumBetween = (min, max)=>{
  return Math.random() * (max - min) + min;
};

