// function delay(ms, value) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`${value}: ${ms}ms 후 완료`), ms);
//   });
// }

// async function runAll() {
//   try {
//     const results = await Promise.all([
//       delay(1000, "첫 번째 작업"),
//       delay(2000, "두 번째 작업"),
//       delay(5000, "세 번째 작업"),
//     ]);

//     console.log("모든 작업 완료:", results);
//     // ["첫 번째 작업: 1000ms 후 완료", "두 번째 작업: 2000ms 후 완료", "세 번째 작업: 1500ms 후 완료"]
//   } catch (err) {
//     console.error("에러 발생:", err);
//   }
// }

// runAll();

const res = await fetch('https://learn.codeit.kr/api/color-surveys/?offset=10&limit=1');
const data = await res.json();
console.log(data);

// http 프로토콜 메소드 
// get : 서버에 요청해서 데이터를 가지고 옴, fetch의 디폴트 요청 방식이라 별도의 설정을 하지 않음. 
// 기본 예시 : fetch('https://learn.codeit.kr/api/color-surveys');
// 쿼리 예시 : fetch('https://learn.codeit.kr/api/color-surveys/?offset=10&limit=10'); -> ?(물음표) 다음에 정해진 명령어를 써서 필요한 데이터에 대한 부가 정보 설정, 갯수 설정 등이 가능함


// const url = new URL('https://learn.codeit.kr/api/color-surveys');
// url.searchParams.append('offset', 10);
// url.searchParams.append('limit', 10);

// const res = await fetch(url);
// // 쿼리로 불러오는 결과와 동일함 
// // const res = await fetch('https://learn.codeit.kr/api/color-surveys/?offset=10&limit=1');


// const data = await res.json();
// console.log(data);