class Book {
    constructor(title,author){
        this.title = title;
        this.author = author;
    }

    printInfo(){
        console.log(`제목 : ${this.title}, 저자 : ${this.author}`);
    }
}

const gptbook = new Book("챗GPT는 내 비서","이경상, 최봉, 챗GPT");
gptbook.printInfo();