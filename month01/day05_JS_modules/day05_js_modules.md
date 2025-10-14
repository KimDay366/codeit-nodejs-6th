# 자바스크립트 모듈
2025.09.24

### 기본 설명

- **모듈이란?** : 자바스크립트 파일을 하나로 쓰는 것이 아니라, 각 역할마다 나누어 별도의 파일로 관리하는 것
- **모듈화 장점** : 하나의 모듈을 만들면 다른 곳에서 동일하게 사용 가능하며, 문제가 생길 경우 해당하는 모듈만 수정하면 되어서 관리가 용이함
- **모듈의 종류** : 변수, 함수 모두 가능

### 모듈화 문법

1. import / export <br>
   - export : 원하는 모듈을 내보낼 때 사용하는 명령어
   - import : 사용하고자 하는 모듈을 가지고 와 쓸 때 사용하는 명령어
2. 모듈화 방식

   - 네이밍 방법 : 내보내고자 하는 모듈 마다 export를 사용하는 방식으로, import 할 때도 사용했던 정확한 이름으로 가져와야함. 만약 import 할 때 사용 할 네이밍이 이미 사용중이어서 이름을 바꿔야 한다면 as를 써서 변경 가능

   ```javascript
   -- 모듈 파일 --
   export const word = "hello";
   export function text(a){
       console.log(a);
   }

   function firstFn(a){
    console.log(a);
   }

   function secFn(a){
    console.log(a);
   }

   export {firstFn, secFn};


   -- 불러오는 파일 --

   import {word, text} from "모듈 파일명"
   // import {word, text as textShow } from "모듈 파일명"

   console.log(text("hi"));
   ```

   - 디폴트 방법 : 단일 모듈을 사용할 때 사용하는 방식으로, 파일 1개에 1개의 디폴트 모듈만 사용함(디폴트 모듈 외에 네이밍 모듈은 추가로 사용 가능). import 할 때에는 편의에 따라 이름 변경이 가능함(보통은 헷갈리지 않게 동일하게 사용)

   ```javascript
   -- 모듈 파일 1 --
    // 모듈 맨 앞에 export default 를 써서 하나만 사용하는 경우
    export default mainFn(a,b){
        return a + b;
    }


   -- 모듈 파일 2 --
   // 부득이하게 여러 개의 변수,함수를 내보낼 때는 마지막에 최종 객체로 묶어서 내보내기가 가능함. 사용 할 때는 메서드로 사용 가능
   const word = "hello";
   function text(a){
       console.log(a);
   }

   const all = {
       word,
       text,
   }

   export default all;


   -- 불러오는 파일 --

   import allContent from "모듈 파일명"

   console.log(allContent.text("hi"));
   ```

<br><br><br>

# NPM 활용하기

### 기본설명
- Node Package Manager, 패키지 관리 프로그램으로 작업하는 프로젝트의 버전 관리 혹은 사용하는 여러 라이브러리의 정보 등을 관리하게 됨.
- ESM 방식 : ECMAScript 에서 만든 모듈 문법, .mjs라는 확장자를 사용

### package 설치 하기 
- npm install 패키지 이름
- npm uninstall 패키지 이름
- package.json 파일 내 셋팅 
    1) "type" : "module" - 작업할 파일들이 ESM방식을 사용하기 위해 "모듈"이라고 명시 해 주는 것
    2) "script" 내 명령어 작성 : npm 개발환경 실행 시 사용할 커스텀 명령어 작성

<br><br><br>


# 실습
- 문제 1. 기본 내보내기 (default export)
  - circle.js 파일을 만들고, 반지름을 받아 원의 넓이를 반환하는 함수를 default export 하세요.
  - main.js에서 불러와서 반지름이 5일 때 넓이를 출력하세요.
  - (원의 넓이 공식: π × r², π는 3.14 사용)

- 문제 2. default + named export 혼합
  - utils.js 파일을 만들고
  - 문자열을 뒤집는 함수 reverseString(str) → default export
  - 문자열을 대문자로 바꾸는 함수 toUpperCase(str) → named export
  - main.js에서 두 함수를 모두 불러와서:
  - "hello" → 뒤집기
  - "world" → 대문자 변환
  - 결과를 출력하세요.

