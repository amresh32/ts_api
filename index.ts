import express = require('express');
import * as bodyparser from 'body-parser';
import  usersRoutes from './routes/users.js'


const app = express();
const PORT = 3000;

app.use(bodyparser.json());

app.use('/users',usersRoutes);


app.get('/', ( req : any, res : any) => res.send ('Hello from Homepage.') );



app.listen(PORT, () => console.log(`server is Running on port: http://localhost: ${PORT}`))


