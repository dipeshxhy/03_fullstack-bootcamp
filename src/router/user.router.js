import { Router } from 'express';

const userRouter = Router();

userRouter
  .route('/')
  .get((req, res) => {
    res.status(200).json({ message: 'Get all users' });
  })
  .post((req, res) => {
    res.status(201).json({ message: 'Create a new user' });
  });

userRouter
  .route('/:id')
  .get((req, res) => {
    res.status(200).json({ message: `Get user with id ${req.params.id}` });
  })
  .patch((req, res) => {
    res.status(200).json({ message: `Update user with id ${req.params.id}` });
  })
  .delete((req, res) => {
    res.status(204).json({ message: `Delete user with id ${req.params.id}` });
  });
export default userRouter;
