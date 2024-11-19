const express=require('express');
const multer=require('multer')
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const Cust=require('./models/customers');
const contactus=require("./routes/contactusRoute")
const userprofile=require("./routes/userProfileRoute");
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage });

async function main() {
    try{await mongoose.connect("mongodb://localhost:27017/Backend-The_AssignerDB")}
    catch(err){
        console.log(err);
    }
}

main().catch(console.error);

app.use("/contactus",contactus);

app.use("/userprofile",userprofile);

app.listen('3000',function(){
    console.log('server started');
})
