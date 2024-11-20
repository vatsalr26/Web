import { error } from 'console';
import express , {Express} from 'express';
import path  from 'path';
import rout from "./src/index"


const app: Express =  express()

const PORT: number = 3000


app.use(express.json())

app.use(express.static(path.join(__dirname,'../public')));

app.use("/",rout)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });



