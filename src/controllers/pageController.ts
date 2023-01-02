import { Request, Response } from "express";
import { creatMenuObject } from '../healpers/creatMenuObject';
import { pets } from '../models/Pets';

export const home = (req: Request, res: Response) => {
    let list = pets.getAll();
    res.render('pages/page', {
        menu: creatMenuObject('all'),
        banner: {
            background: 'allanimals.jpg',
            title: 'Todos os animais',
        },
        list
    });
}
export const cachorros = (req: Request, res: Response) => {
    let list = pets.getFromType('dog');
    res.render('pages/page',{
        menu: creatMenuObject('dog'),
        banner: {
            background: 'banner_dog.jpg',
            title: 'Cachorros',
        },
        list
    });
}
export const gatos = (req: Request, res: Response) => {
    let list = pets.getFromType('cat');
    res.render('pages/page', {
        menu: creatMenuObject('cat'),
        banner: {
            background: 'banner_cat.jpg',
            title: 'Gatos',
        },
        list
    });
}
export const peixes = (req: Request, res: Response) => {
    let list = pets.getFromType('fish');
    res.render('pages/page', {
        menu: creatMenuObject('fish'),
        banner: {
            background: 'banner_fish.jpg',
            title: 'Peixes',
        },
        list
    });
}   


export const notFound = (req: Request, res: Response) => {
    res.render('pages/404page', {
        menu: creatMenuObject('')
    })
}