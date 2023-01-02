import express, {Request, Response} from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRouters from "./routes/index";
import * as pageController from './controllers/pageController';
import * as searchController from './controllers/searchController'; 


dotenv.config();

const server = express();

server.set("view enginer", "mustache"); // define a engine que usaremos
server.set("view", path.join(__dirname, 'views')); // define onde está nossos arquivos de views 
server.engine('mustache', mustache()); // seta minha engine


server.use(express.static(path.join(__dirname, '../public'))); // define onde estão meus arquivos estaticos

server.use(mainRouters);

server.get('/', pageController.home);   
server.get('/cachorros', pageController.cachorros);   
server.get('/gatos', pageController.gatos);   
server.get('/peixes', pageController.peixes);   
server.get('/buscar', searchController.search);   

server.use((req: Request, res: Response)=>{
    res.send('<h1>Página não encontrada! ;-;</h1>');
})

server.listen(process.env.PORT);