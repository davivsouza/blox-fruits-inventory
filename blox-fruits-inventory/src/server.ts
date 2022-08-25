import { app } from "./app";
import mongoose from 'mongoose'


mongoose.connect("mongodb://localhost/bloxFruitsInventory")

const db = mongoose.connection

db.once('open', ()=>{
  console.log('mongodb is running!');
  
})
app.listen(3003, ()=> {console.log('Server is running !')})