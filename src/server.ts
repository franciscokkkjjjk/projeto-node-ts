import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRouters from "./routes/index";

dotenv.config();

const server = express();

// server.set("views", path.join(__dirname, 'views')); // define onde está nossos arquivos de views 
// server.set("view enginer", "mustache"); // define a engine que usaremos
// server.engine('mustache', mustache()); // seta minha engine


server.set('view engine', 'mustache'); 

server.set('views', path.join(__dirname, 'views'));
console.log(path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public'))); // define onde estão meus arquivos estaticos
server.use(mainRouters);



// server.use((req: Request, res: Response)=>{
//     res.send('<h1>Página não encontrada! ;-;</h1>');
// })

server.listen(process.env.PORT);