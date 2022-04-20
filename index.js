const express = require('express');
const cors=require('cors');
const { listen } = require('express/lib/application');
const app= express();
const port=process.env.PORT||5000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
 res.send('Node mongo db')
});


app.listen(port,()=>{
    console.log('Crud is running');
})