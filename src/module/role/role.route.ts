import { Router } from "express";
import { roleController } from "./role.controller";

const RoleRouter = Router();

RoleRouter.post('/', roleController.create)
RoleRouter.get('/', roleController.list)
RoleRouter.get('/:id', roleController.get)
RoleRouter.put('/:id', roleController.update)
RoleRouter.delete('/:id', roleController.delete)

export { RoleRouter }
