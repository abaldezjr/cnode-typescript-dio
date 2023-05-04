import {
    Router,
    Request,
    Response,
    NextFunction
} from "express";

import { StatusCodes } from 'http-status-codes';

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{
        username: 'baldezjr'
    }];
    res.status(StatusCodes.OK).send({ users });
});

usersRoute.get('/users/:id', (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    const id = req.params.id;
    res.status(StatusCodes.OK).send({
        id: id
    });
});

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    console.log(newUser);
    res.status(StatusCodes.CREATED).send({newUser});
});

usersRoute.put('/users/:id', (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const updatedUser = req.body;
    res.status(StatusCodes.OK).send({
        id: id,
        user: updatedUser
    });
});

usersRoute.delete('/users/:id', (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const updatedUser = req.body;
    res.sendStatus(StatusCodes.OK);
});

export default usersRoute;