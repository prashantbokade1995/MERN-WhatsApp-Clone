
import express from 'express'
import cors from 'cors'
import DBconnection from './database/db.js';
import route from './routes/route.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8000;

app.use(cors());

// Calling the app.use(express.json()); method for parsing

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));



app.use('/', route)
DBconnection()



app.listen(PORT, ()=>{
    console.log("this server run on this http://localhost:8000", PORT)
})

