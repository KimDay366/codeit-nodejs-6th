// 참고용 코멘트
// 1. 원래 코드 작성 시 import 문은 모두 상단에 모아 적는 것이 맞지만, 
//    작업 구분을 위해서 임의로 중간 중간에 삽입하였습니다.
// 2. 모든 기능은 해당 페이지에서 끝나는 것이 아니라 html과 연동되어 사용 된다는 가정으로 하였기에,
//    각 데이터는 변수에 담아 사용 하도록 작업하였습니다. 


import Article from "./class/Article.js";
import ArticleService from "./api/articleService.js";

// class Article test 
const data1 = [ "두번쨰 스프린트 미션 V", "증말~ 어렵다~ ㅋㅋㅋ", "JS",];
// const dataArt1 = new Article(...data1);
// console.log(dataArt1);

// class ArticleService test data
const test1 = new ArticleService;

const artApiList = {
    page : 1,
    pageSize: 10,
    keyword: "",
}

const artApiId = 4834;

const artApiData = {
    title : 'testJS',
    content: 'test를 진행합니다 :)',
    image : "http://sample.jpg",
}

const artApiUpData = {
    id : 4834,
    title : 'testJS123',
    content: 'test를 다시 진행합니다 :)',
    image : "http://sample222222222.jpg",
}

//  Article Service 
// ====== GET 함수 2종 테스트 ====== 
// test1.getArticleList(artApiList);
// test1.getArticle(artApiId);

// ====== POST 함수 테스트 ====== 
// test1.createArticle(artApiData); 

// ====== PATCH 함수 테스트 ======
// test1.patchArticle(artApiUpData);

// ====== DELETE 함수 테스트 ====== 
// test1.deleteArticle(artApiId);


import Product from "./class/Product.js";
import ElectronicProduct from "./class/ElectronicProduct.js";
import ProductService from "./api/productService.js";

// class Product / ElectronicProduct test 
const data2 = [ "여행용 티슈", "다*소에서 제발 사가요, 가성비 캡숑짱b", 100000, "", "http://sample.jpg"];
// const dataProd1 = new Product(...data2);
// console.log(dataProd1);

const data3 = [ "개굴가습기", "개굴 개굴 개구리, 노래하며 가습해요", 100000, "전자제품", "http://sample.jpg", "송송전자"];
// const dataProd2 = new ElectronicProduct(...data3);
// console.log(dataProd2);


// class ProductService test data
const test2 = new ProductService;

const prodApiList = {
    page: 1,
    pageSize: 10,
    keyword: "",
}

const prodApiId = 2299;

const prodApiData = {
    name : "알린 스피커",
    description : "토이스토리 알린 캐릭터 스피커 'v' ",
    price : 10,
    images : "https://example.com/...",
    isEletron : "아니오",
}

const prodApiUpData = {
    id : 2275,
    name : "라이언 스피커",
    description : "카카오 캐릭터 스피커 ~,~ ",
    price : 10,
    images : "https://example.com/...",
    isEletron : "아니오",
}

// Product Service test
// ====== GET 함수 2종 테스트 ====== 
// test2.getProductList(prodApiList);
// test2.getProduct(prodApiId);

// ====== CREATE 함수 테스트 ====== 
// test2.createProduct(prodApiData);

// ====== PATCH 함수 테스트 ====== 
// test2.patchProduct(prodApiUpData);

// ====== DELETE 함수 테스트 ====== 
// test2.deleteProduct(prodApiId);


// ++ 추가 작업 ++
import ArticleServiceAxios from "./api/articleSevice_axios.js";

const artAxiosApiList = {
    page : 1,
    pageSize: 2,
    orderBy : 'recent',
    keyword: "",
}

const artAxiosApiId = 4948;

const artAxiosApiData = {
    title : 'testJS',
    content: 'test를 진행합니다 :)',
    image : "http://sample.jpg",
}

const artAxiosApiUpData = {
    id : 4945,
    title : 'testJS123',
    content: 'test를 다시다시 진행합니다 :)',
    image : "http://sample222222222.jpg",
}

const test3 = new ArticleServiceAxios;

// Article Service Axios test
// ====== GET 함수 2종 테스트 ====== 
// test3.getArticleListAxios(artAxiosApiList);
// test3.getArticleAxios(artAxiosApiId);

// ====== CREATE 함수 테스트 ====== 
// test3.createArticleAxios(artAxiosApiData);

// ====== PATCH 함수 테스트 ====== 
// test3.patchArticleAxios(artAxiosApiUpData);

// ====== DELETE 함수 테스트 ====== 
// test3.deleteArticleAxios(artAxiosApiId);