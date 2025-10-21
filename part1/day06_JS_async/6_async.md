# 비동기 처리 
2025.09.25

- 자바스크립트는 싱글스레드, 즉 일처리 담당이 1명밖에 없음. 따라서 코드의 순서에 따라 작업이 진행되기 때문에 일부 작업으로 인해 전제 작업이 딜레이 되는 현상이 발생함 

## 콜백 함수 & 비동기
 - 콜백 함수 : 특정 작업이 끝나면 실행 되는 함수.
 
 - 동기 실행 : 실행 순서에 따라 작업이 진행되는데, 현재 작업이 종료 되어야 다음 작업이 시작 될 수 있음.
 
 - 비동기 실행 : 현재 작업이 너무 오래 걸리는 경우 다른 작업을 우선 실행 하여 전체 과정을 효율적으로 운영 가능

 - 콜백 헬, 콜백 지옥 : 콜백 함수 안에 콜백 함수를 넣고, 그 안에 또 콜백함수를 넣어서 사용하는 것 처럼 무한 콜백 함수 안에 갇히는 것.

## Promise 문법 
 : Promise는 비동기 작업의 상태와 완료 된 정보를 알려주며, 이를 활용할 수 있도록 JS에서 제공하는 내장 객체(기능/클래스)

### [비동기 상태 정보]
 - pending : 비동기 작업이 진행 중인 상태
 - fulfilled : 비동기 작업이 성공하여 끝난 상태
 - rejected : 비동기 작업이 실패하여 끝난 상태

### [Promise 사용하기]
 - .then() : fulfilled 되면 실행되는 콜백 함수, 성공 시 값 전달을 하는 역할로, 한번에 여러 개 사용 가능
 - .catch() : rejected 되면 실행되는 콜백함수, 실패 시 에러를 전달하는 역할로 .then()이 종료 된 이후 작성하여 사용 함
 - .finally() : 비동기 작업의 결과와 상관없이 실행되는 콜백함수

 ```javascript
fatch("api 주소 삽입")
    .then((response)=>{
        // throw new Error("make error!"); 강제로 에러를 만들면 아래의 catch문이 실행 됨
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log('Error!');
    })
    .finally(()=>{
        console.log("finish!");
    });

 ```

## async / await 문법
: Promise 문법에서 나오는 .then()체이닝을 해결하는 발전 된 문법

- async : await을 사용하는 함수에 함께 사용하는 명령어 
- await : 비동기로 이루어 지겠다고 선언하는 명령어
- try & catch : try 문은 await이 정상 작동하는 공간, catch문은 await이 문제가 생겼을 경우 에러를 출력하는 공간

``` javascript

async function dataInfo(){
    
    try{

        // Promise의 .then() + .finally() 역할
        const data = await fetch('API 주소');
        const dataJson = data.json;
        return dataJson

    }catch(error){

        // Promise의 .catch() 역할
        console.log(error);
    }
}
```