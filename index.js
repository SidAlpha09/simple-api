const express=require('express')  //express will be used for the middleware to create various CRUD endpoints
const mongoose=require('mongoose') //Mongoose for managing data in MongoDB using various queries

const routes=require('./routes/routes')


require('dotenv').config();
const mongoString=process.env.DATABASE_URL//storing the string into a variable\

//connecting database to the server using mongoose
mongoose.connect(mongoString);
const database=mongoose.connection
//throwing a success or fail message

//database.on -->connect to the database, and throws any error if the connection fails.
database.on('error',(err)=>{
    console.log(Error)
})

//database.once -->run only one time. If it is successful, it will show a message that says Database Connected.
database.once('connected',()=>{
    console.log('Connected to the database')
})

const app=express()
app.use('/api',routes)//Here, this app.use takes two things. One is the base endpoint, and the other is the contents of the routes. Now, all our endpoints will start from '/api'.

app.use(express.json())//the middleware which parse the data into json format



app.listen(3000,()=>{
    console.log(`Server Started at ${3000}`)
})

