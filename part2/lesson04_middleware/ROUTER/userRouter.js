import express from 'express';

const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log('user용 미들웨어');
  next();
});

userRouter
  .route('/')
  .get((req, res) => {
    res.json({ message: 'users 목록 보기' });
  })
  .post((req, res) => {
    res.json({ message: 'user 추가하기' });
  });

userRouter
  .route('/:id')
  .patch((req, res) => {
    res.json({ message: 'user 수정하기' });
  })
  .delete((req, res) => {
    res.json({ message: 'user 삭제하기' });
  });

export default userRouter;
