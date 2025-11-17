// const express = require('express')  //Imported express module

// const app = express()    //Crearted an Express application

// //Deining a route / URL / Address 

// app.get('/login' , (req,res)=>{

//   res.send('Fill the form to Login')

// })

// //Started The server

// app.listen(3000,()=>{
//     console.log("Server Running on http://localhost:3000")
// })



//2.Example - URL module in built module and gives info about url
const url = require('url')

var adr1 = 'https://www.youtube.com/results?search_query=peaky+blinders+trailer'

var adr2 = 'https://www.amazon.com/'

var xyz = url.parse(adr1)
var abc = url.parse(adr2)

console.log(xyz.query)
console.log(xyz.search)
console.log(abc.hostname)