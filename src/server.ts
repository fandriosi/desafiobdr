import express from 'express';
import './database/connection';
import  Router from './routers';
const app = express();
app.use(express.json());
app.use(Router);
app.listen(3000);