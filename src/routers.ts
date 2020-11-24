import {  Router } from 'express';
import UsersControllers from './controllers/UsersControllers';
import UserController from './controllers/UsersControllers'
const routers = Router();

routers.post('/users', UsersControllers.create)
routers.get('/users/:id', UsersControllers.show)
routers.get('/users', UsersControllers.index);

export default routers;













