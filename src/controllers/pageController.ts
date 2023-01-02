import { Request, Response } from "express";
export const home = (req: Request, res: Response) => {
    res.render('pages/page');
}
export const cachorros = (req: Request, res: Response) => {
    res.render('pages/page');
}
export const gatos = (req: Request, res: Response) => {
    res.render('pages/page');
}
export const peixes = (req: Request, res: Response) => {
    res.render('pages/page');
}   

export const notFound = (req: Request, res: Response) => {
    res.send('<h1>Página Não encontrada! ;-;</h1>');
}