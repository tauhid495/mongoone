const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const { listen } = require('express/lib/application');
const app = express();
const port = process.env.PORT || 5000;

// mongodb user
// name: user1db
// password: tauhid.1691



const uri = "mongodb+srv://user1db:tauhid.1691@cluster0.3nbaa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const userCollection = client.db('juceExpress').collection('user');

        app.post('/user', (req, res) => {
            const newUser = req.body;
            console.log('adding new user', newUser);
            res.send('user date received.')


        })

    } finally {

    }
}

run().catch(console.dir);


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Node mongo db is running')
});


app.listen(port, () => {
    console.log('Crud is running');
})