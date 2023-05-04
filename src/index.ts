import express, { Request, Response, NextFunction } from 'express';
import usersRoute from './routes/users.route';
import statusRoute from './routes/status.route';

const app = express();

//config app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config routes
app.use(statusRoute);
app.use(usersRoute);

//initialization server
app.listen(3000, () => {
    console.log("Aplicação executando na porta 3000");
});