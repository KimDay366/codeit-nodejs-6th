import express from 'express';

const orderRouter = express.Router();

orderRouter.use((req, res, next) => {
  console.log('order용 미들웨어');
  next();
});

orderRouter
  .route('/')
  .get((req, res) => {
    res.json({ message: 'orders 목록 보기' });
  })
  .post((req, res) => {
    res.json({ message: 'order 추가하기' });
  });

orderRouter
  .route('/:id')
  .patch((req, res) => {
    res.json({ message: 'order 수정하기' });
  })
  .delete((req, res) => {
    res.json({ message: 'order 삭제하기' });
  });

export default orderRouter;
