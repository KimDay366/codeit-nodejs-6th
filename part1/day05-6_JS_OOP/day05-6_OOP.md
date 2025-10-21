# 객체 지향 프로그래밍
2025.09.24

### 객체의 개념
- 참조형 타입인 object이며, 프로퍼티와 메소드로 내부가 구성되어 있다
- 프로퍼티 : 객체의 상태를 나타내는 속성으로 key와 value의 쌍으로 사용된다
- 메소드 : 객체의 행동을 나타내는 것으로, 객체 내부에서 작성되어 사용하는 함수들을 일컫는다

### 클래스와 인스턴스 개념
- 기본 객체 만들기 = 리터럴 방식 : 변수명에 {}를 사용하여 필요 할 때마다 직접 만듦.
- 클래스 : 필요할 때마다 불러와 함수처럼 객체를 만드는 일종의 객체 틀 
- 인스턴스 : 클래스 객체로 만들어진 결과값. this는 인스턴스 자신을 가리킴
- 생성자 함수 constructor : 클래스 안에서 인스턴스를 초기화 하는 함수를 의미. 

### 클래스 사용 문법

```javascript
class 이름(첫 글자는 대문자) {
    constructor(매개변수..){
        this.키1 = 값1;
        this.키2 = 값2;
    } //constructor는 객체를 만드는 고정된 함수
    메서드명1(매개변수..){
        실행 할 함수 내용
    }
    // 클래서 안에서 만들어지는 메소드는 
    // 인스턴스가 생성 = 클래스가 사용 되어야 만 그때 사용할 수 있는 메서드 임
} 

const aaa = new 이름(constructor 매개변수값)

// 실행결과
class People {
    constructor(name,age){
        this.name = name;
        thie.age = age;
    }
    text(str){
        console.log(str);
    }
}

const js = new People("js",35);
js.text('hello');
```

---

<br>
<br>
<br>

2025.09.25

# 객체 지향 프로그래밍 (OOP)

## 기본 개념
1) 절차 지향 프로그래밍
    - 프로그램 동작을 개발 언어 중심으로 구현하는 방식 
    - 연관된 데이터와 함수가 있는 경우 각각 분리하어 작성되고 순차적인 실행이 이루어 지게 구현 해야 원활히 작동 함
    - 간단한 문제 해결로는 해당 방식이 좋지만, 대부분 작업이 프로그램을 개발하는 방식이므로 절차 지향 방식으로 사용하면 코드가 복잡해지고 관리가 힘들어짐 
2) 객체 지향 프로그래밍
    - 객체와 객체의 상호작용을 중심으로 구현하는 방식
    - 연관된 데이터와 함수가 하나의 객체로 묶어서 사용 가능하기 때문에 좀 더 관리가 용이함
    - 객체를 만들어 다른 곳에서 사용이 가능하여 재사용성이 높음

## 기능

### 캡슐화 
- 여러 개발자가 작업 시 중요한 데이터에 함부로 접근하지 못하도록 막는 기능
- 안정성이 높아짐

```javascript
class Elec{
    #name; 
    // Private 문법, 원하는 속성 이름(Key) 앞에 #을 붙여서 사용. 
    // 외부에서 name이라는 키값을 바꾸거나 접근 할 수 없음.

    constructor(name,position){
        this.#name = name;
        this.position = position;
    }

    station(){ console.log(`${this.#name}가 ${this.position}에 있습니다.`);}
}

const com1 = new Elec("컴퓨터","책상");
console.log(com1.name); // 애초에 name으로 선언한게 아니라 #name으로 선언했기 때문에 undefined가 나옴
console.log(com1.#name); // private 속성이기 때문에 바깥 영역에서는 접근 불가함

com1.station();

```
- 캡슐화의 getter 와 setter 
    - 캡슐화 된 속성에 접근하기 위하여, get / set 명령어를 이용하여 간단하게 접근 방식을 사용. 
    - 일반 함수를 만들어 해당 내용을 만들어 사용해도 되지만, 재사용 시 용이하기 위하여 해당 명령어를 사용하여 resetting 함. 
    - get/set 명령어는 필수로 쓰는것이 아니라 필요한 시점에만 해당 명령어를 열어주고, 평소에는 막아두는 역할로 사용함
    - 해당 명령어를 통해 추후 "검증, 추가 계산, 로그기록" 등 확장 가능
```javascript
class Elec{
    #name; 

    constructor(name,position){
        this.#name = name;
        this.position = position;
    }

    station(){ console.log(`${this.#name}가 ${this.position}에 있습니다.`);}

    // getter : Private 속성에 제대로 값이 들어갔는지 확인하는 메서드 
    get name(){ return this.#name; }

    // setter : Private 속성의 값을 변경할 때 사용하는 메서드
    set name(newName){ 

        // 들어오는 데이터의 검증 작업이 가능함
        if(typeof newName !== "string"){
            throw new Error("문자를 입력 해 주세요");
        } 

        this.#name = newName; 
    }
}

const com1 = new Elec("컴퓨터","책상");

// getter, setter가 생겨서 아래의 접근법이 가능해 짐
console.log(com1.name); 
com1.name = "모니터";

com1.station();

```

<br>

### 상속

- 상위 클래스의 프로퍼티와 메소드를 하위 클래스가 물려받아 사용하는 것. 
- 클래스 선언 시 extends를 사용해 상위 클래스를 불러오고, 상위 클래스는 하위 클래스 위에 항상 위치해야 제대로 작동함. 
- 상위 클래스를 new 명령어로 새로 생성한다고 해서 하위 클래스도 같이 선언되는 개념은 아님.(상위 클래스 내부에 선언한 "프로퍼티 자체"를 재선언 하지 않고 사용 할 수 있는 개념)

```javascript
class Elec{
    #name; 

    constructor(name="그것",position){
        this.#name = name;
        this.position = position;
    }

    station(){ console.log(`${this.#name}가 ${this.position}에 있습니다.`);}
    get name(){ return this.#name; }
}

class Computer extends Elec{
    
    constructor(name,position,local){
        super(name,position);
        this.local = local;
        // 상위 클래스에서 받은 프로퍼티를 제외한 나머지 프로퍼티 선언
    }

    pos(){
        console.log(`${this.name}가 ${this.position}에 올려져있습니다.`);
    }
}

const com1 = new Computer(undefined,"책상");
com1.station();
com1.pos();

```

<br>

### 다형성 (메서드 오버라이팅)

- 상위 클래스와 하위 클래스에서 사용하는 메서드의 이름이 같은 경우에도, 서로 별도의 메서드로 보고 불러오는 클래스에 맞게 각각 동작하는 것

```javascript
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

```


<br>

### 추상화

- 객체 모듈을 사용할 때는 결과로 나온 프로퍼티 혹은 메서드만 사용하기 때문에, 내부의 복잡한 내용을 알지 못해도 손쉽게 사용 가능. 
- 예시 : 마라탕을 사 먹을때, 안에 들어가 있는 각각의 재료 손질법 / 재료를 구한 위치 / 재료의 보관 방법 등을 알지 못해도 
<br>[한 그릇에 모두 넣어 끓이면 먹을 수 있음] = 동작, 행위, 메서드
<br>[맛있다, 매콤하다] = 결과값, 프로퍼티!
