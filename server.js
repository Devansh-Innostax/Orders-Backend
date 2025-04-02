import express from "express"
import pgPromise from "pg-promise";
import dotenv from 'dotenv';

const app = express();
const port = 8000;
const pgp = pgPromise()
dotenv.config();

const db = pgp(`postgres://${process.env.USER}:${process.env.PWD}@localhost:5432/${process.env.DATABASE}`)


// const db = pgp('postgres://postgres:user@localhost:5432/crudwithexpress')
// const db = pgp('postgres://postgres:user@localhost:5432')

app.listen(port, () => {
    console.log("App running on port: https://localhost:" + port);
})

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('C:/Users/innostax-31-03/Desktop/Taining Phase/Express-Postgres-CRUD/index.html');
})

app.get('/fetchAll', async (req, res) => {
    db.query("select * from orders")
        .then((data) => {
            res.send(data)
        })
})

app.get('/enterData', (req, res) => {
    res.sendFile('C:/Users/innostax-31-03/Desktop/Taining Phase/Express-Postgres-CRUD/enterData.html')
})
app.get('/enterOrderID', (req, res) => {
    res.sendFile('C:/Users/innostax-31-03/Desktop/Taining Phase/Express-Postgres-CRUD/enterOrderID.html')
})
app.get('/enterNewData', (req, res) => {
    res.sendFile('C:/Users/innostax-31-03/Desktop/Taining Phase/Express-Postgres-CRUD/enterNewData.html')
})

app.post('/putData', (req, res) => {
    const { orderId, userId, price, username } = req.body;
    db.query('insert into orders values($1,$2,$3,$4)', [orderId, userId, price, username]).then(() => console.log('data inserted'))
    return res.sendFile('C:/Users/innostax-31-03/Desktop/Taining Phase/Express-Postgres-CRUD/index.html');
})

app.put('/updateData', (req, res) => {
    const { orderId, price, username } = req.body;
    db.query('update orders set price=$2,user_name=$3 where order_id=$1', [orderId, price, username]).then(() => console.log('data updated'))
    return res.sendFile('C:/Users/innostax-31-03/Desktop/Taining Phase/Express-Postgres-CRUD/index.html');
})

app.delete('/deleteData', (req, res) => {
    const { orderId } = req.body;
    db.query('delete from orders where order_id=$1', [orderId]).then(() => console.log('data deleted'))
    window.location.href = 'http://localhost:8000/'
})