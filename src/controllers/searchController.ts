import { Request, Response} from "express";
import { pets } from '../models/Pets';
import { creatMenuObject } from "../healpers/creatMenuObject";

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;
    let list = pets.getFromName(query);
    
    if(!query) {
        res.redirect('/');
        return;
    }

    res.render('pages/page', {
        list,
        menu: creatMenuObject(''),
        query
    })
}