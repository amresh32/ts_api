
    import express = require("express");
    var app = express();

import  { Router } from 'express';
const { v4: uuidv4 } = require('uuid');

const router = express.Router();
let users : any = [ ]

router.get('/',( req, res) =>{
    console.log(users);
    res.send(users);
});

router.get('/getBrowserInfo',( req, res) =>{
    res.send(req.headers['user-agent']);
});

router.post('/',(req,res) => {

const user = req.body;

users.push({ ...user,id : uuidv4() });

 res.send(`User with the name ${user.firstname} added to the database!`);
})

router.get('/:id',(req,res) => {


    const { id } = req.params;

    const foundUser = users.find((user: any) => user.id === id);

    res.send(foundUser);
});

router.delete('/:id',(req,res) => {

    const { id } = req.params;

    users = users.filter( (user : any) => user.id !== id );


    res.send(`User with the id ${id} deleted from database.`);

});

router.patch('/:id',(req,res) => {
     const { id } = req.params; 

     const { firstname , lastname , age } = req.body ;

    const user = users.find((user : any) => user.id === id);

    if (firstname) user.firstname = firstname ;
    if (lastname) user.lastname = lastname ;
    if (age) user.age = age ;

    res.send(`User with the id ${ id } has been updated.`)

})
export default router;