import { Router } from "express";
import { categoryController } from "./category.controller";

const CategoryRouter = Router();

CategoryRouter.post('/', categoryController.create);
CategoryRouter.get('/', categoryController.list);
CategoryRouter.get('/:id', categoryController.get);
CategoryRouter.put('/:id', categoryController.update);
CategoryRouter.delete('/:id', categoryController.delete);

export { CategoryRouter }