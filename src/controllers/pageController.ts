import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.render('pages/page');
    // res.send('teste');
}
export const cachorros = (req: Request, res: Response) => {
    console.log(res.render);
    // res.send('olá');
    res.render('pages/page');
    // res.render('pages/page');
}
export const gatos = (req: Request, res: Response) => {

}
export const peixes = (req: Request, res: Response) => {

}   