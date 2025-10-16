## 요구사항

### [ 기본 ] 
### 1. 클래스 구현하기
- Product class
  - [x] 프로퍼티 : name(이름), description(상품설명), price(판매 가격), tags(해시태그, 배열), images(이미지 배열), favoriteCount(찜하기 수) 
  - [x] 메소드 : favorite (호출 될 경우 favoriteCount 가 1 증가) <br><br>
- ElectronicProduct Class 
  - [x] 프로퍼티 : menufacturer(제조사), 나머지는 Product 상속 
  - [x] 메소드 : 없음 <br><br>
- Article Class 
  - [x] 프로퍼티 : title(제목), content(내용), writer(작성자), likeCount(좋아요 수) 
  - [x] 메소드 : like (호출 될 경우 likeCount가 1 증가) <br><br>

### 2. 함수 구현하기 
- Article Service function (with fetch.than().catch() 문법 사용) 
  - [x] getArticleList() : 메소드 - GET / 쿼리 파라미터 : page, pagesize, keyword 
  - [x] getArticle() : 메소드 - GET / 쿼리 파라미터 : id 
  - [x] creatArticle() : 메소드 - POST / 리퀘스트 : title, content, image 
  - [x] PatchArticle() : 메소드 - PATCH / 리퀘스트 : id, title, content, image (id만 필수항목, 나머지는 수정이 필요한 항목만 사용)
  - [x] deleteArticle() : 메소드 - DELETE / 리퀘스트 : id <br><br>
- Product Service function (with fetch & async/aswait & try/catch 문법 사용) 
  - [x] getArticleList() : 메소드 - GET / 쿼리 파라미터 : page, pagesize, keyword 
  - [x] getArticle() : 메소드 - GET / 쿼리 파라미터 : id 
  - [x] creatArticle() : 메소드 - POST / 리퀘스트 : title, content, image 
  - [x] PatchArticle() : 메소드 - PATCH / 리퀘스트 : id, title, content, image (id만 필수항목, 나머지는 수정이 필요한 항목만 사용)
  - [x] deleteArticle() : 메소드 - DELETE / 리퀘스트 : id <br><br>
   
   
### [ 심화 ]
- Article Class 추가 작업
  - [x] Property(프로퍼티) 추가 : createdAt(생성일자) = createdAtData(년,월,일), createdAtTime(시,분,초) 나눠서 2개의 프로퍼티로 작업
<br><br><br><br>


## 주요 변경사항
- Article Service function을 Axios를 사용하여 다시 제작 (aricleSercive_axios.js 파일)
  - [x] getArticleListAxios() : 메소드 - GET / 쿼리 파라미터 : page, pagesize, keyword 
  - [x] getArticleAxios() : 메소드 - GET / 쿼리 파라미터 : id 
  - [x] creatArticleAxios() : 메소드 - POST / 리퀘스트 : title, content, image 
  - [x] PatchArticleAxios() : 메소드 - PATCH / 리퀘스트 : id, title, content, image (id만 필수항목, 나머지는 수정이 필요한 항목만 사용)
  - [x] deleteArticleAxios() : 메소드 - DELETE / 리퀘스트 : id <br><br>
- Article Service / Product Service에서 사용되는 쿼리 파라미터 & 리퀘스트 데이터에 대한 검증 작업 진행
<br><br><br><br>


## 멘토에게
- main.js 파일 : 모든 기능은 해당 페이지에서 끝나는 것이 아니라 html과 연동되어 사용 된다는 가정으로 작업하여, 가능한 모든 데이터는 변수에 담아 사용 하도록 작업하였습니다. <br><br>
- aricleSercive_axios.js 파일 : Axios 사용 시, timeout의 기준은 어떻게 정하는게 가장 좋나요? 혹시 작업하는 API 문서에서 찾을 수 있나요? 시스템 성능, 함수 별 필요한 데이터 양이 다른데, 기준을 모르겠습니다!<br><br>
- 매운맛을 선택하였지만, "신라면"정도의 강도로 부탁 드립니다. 제가 "진순이"라 신라면도 불닭볶음면이여서요🍜
