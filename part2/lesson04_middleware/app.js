import express from 'express';

const app = express();

// =================================
// ======== 미들웨어 사용하기 ==========
// =================================
app.use(express.static('public'));
// public 폴더 안에 있는 파일에 접근하게 해 달라

// 미들웨어 만들기
// - 함수명은 처리 동작에 대한 이름으로 작성
// - 최소한 3개의 인자가 들어감 : req, res, next
function middleware(req, res, next) {
  // 필요한 작업 작성
  console.log('middleware on!');

  // 다음 미들웨어 혹은 라우트핸들러로 넘긴다는 의미
  next();
}

function authenticate(req, res, next) {
  console.log('authenticate 미들웨어 실행!');
  req.user = 'Lesson4';
  next();
}

// function authenticate(req, res, next) {
//   console.log('authenticate 미들웨어 실행!');
//   try {
//     // 실제로 인증 로직을 작성
//     throw new Error('인증실패(강제로 만듦)');
//   } catch (e) {
//     // 미들웨어에서 에러 처리를 할 때에는,
//     // 아래와 같이 next()함수의 인자로 에러를 전달
//     // -> "에러 핸들러"로 에러가 넘어감
//     next(e);
//   }
// }

// next(e) 로 전달 된 에러만 처리 가능한 미들웨어
function errorHandler(err, req, res, next) {
  console.error('에러 출력');
  console.error(err);

  if (err) {
    // err = undefined, null 인 경우
    return res.send('error check!');
  }

  res.send('알 수 없는 오류');
}

app.get('/', middleware, authenticate, (req, res) => {
  console.log('GET on');
  res.json({ message: 'HelloWorld' });
});

// 에러가 발생하면
app.use(errorHandler);

// =================================
// ========= Router 사용하기 =========
// =================================

import userRouter from './ROUTER/userRouter.js';
import orderRouter from './ROUTER/orderRouter.js';

app.use('/users', userRouter);
app.use('/orders', orderRouter);

// =================================
// ========= multer 사용하기 =========
// =================================

// 1. npm install multer 해서 설치 후 불러오기
import multer from 'multer';

// 2. multer 객체 만들기 -> 특정 폴더의 파일을 가져와 저장할 수 있도록 설정
const upload = multer({ dest: 'upload/' });

// 3. 파일 업로드 시 실행 될 내용 작성
app.post('/files', upload.single('attachment'), (req, res) => {
  console.log(req.file);

  const { filename } = req.file;

  // clien가 접근 할 수 있는 경로 안내
  const path = `/files/${filename}`;

  res.json({ path });
});

// 4. 업로드 후 정적 파일이 저장 될 공간
app.use('/files', express.static('upload'));

// 5. 포스트맨을 통해 POST 작업을 진행하면
// 로컬 내부에 "upload" 파일이 생성되고 multer가 고유 이름으로 이미지 명을 바꿔서 보존하고 있음

app.listen(3000, () => {
  console.log('server on!');
});
