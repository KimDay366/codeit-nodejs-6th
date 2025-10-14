const date = new Date('2025-01-01');
const year = date.getFullYear(); // 2025
console.log(year);

// - Book 클래스 작성 및 인스턴스 만들기
//   - Book 클래스를 작성하세요.
//     - 속성: title, author
//     - 메서드: printInfo() → "제목: OOO, 저자: XXX" 형식으로 출력
//     - new 키워드로 인스턴스를 만들고 메서드를 실행하세요.

// class Elec{
//     #name; 

//     constructor(name,position){
//         this.#name = name;
//         this.position = position;
//     }

//     station(){ console.log(`${this.name}가 ${this.position}에 있습니다.`);}

//     // getter : Private 속성에 제대로 값이 들어갔는지 확인하는 메서드 
//     get name(){ return this.#name; }

//     // setter : Private 속성의 값을 변경할 때 사용하는 메서드
//     set name(newName){ 
//         if(typeof newName !== "string"){
//             return console.log("문자를 입력 해 주세요");
//         }
//         this.#name = newName; 
//     }
// }

// const com1 = new Elec("컴퓨터","책상");

// // getter, setter가 생겨서 아래의 접근법이 가능해 짐
// console.log(com1.name); 
// com1.name = 123;

// com1.station();

// class Elec{
//     #name; 

//     constructor(name="그것",position){
//         this.#name = name;
//         this.position = position;
//     }

//     station(){ console.log(`${this.#name}가 ${this.position}에 있습니다.`);}
//     get name(){ return this.#name; }
// }

// class Computer extends Elec{
//     pos(){
//         console.log(`${this.name}가 ${this.position}에 올려져있습니다.`);
//     }
// }

// const com1 = new Elec("컴퓨터","책상");
// com1.station();
// com1.pos();

class Elec{
    #name; 

    constructor(name="그것",position){
        this.#name = name;
        this.position = position;
    }

    station(){ console.log(`${this.#name}가 ${this.position}에 있습니다.`);}
    get name(){ return this.#name; }
}

class Upper extends Elec{
    station(){
        console.log(`${this.name}가 ${this.position}에 올려져있습니다.`);
    }
}

function parentEle(elec){
    elec.station();
}


parentEle(new Elec("컴퓨터","책상")); // "컴퓨터"가 "책상"에 있습니다
parentEle(new Upper("컴퓨터","책상")); // "컴퓨터"가 "책상"에 올려져있습니다.