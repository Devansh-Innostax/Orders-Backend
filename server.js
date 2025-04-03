import express from "express"
import { addData, deleteData, getData, updateData } from "./controllers/manageCRUD.js";

const app = express();
const port = 8000;


app.listen(port, () => {
    console.log("App running on port: https://localhost:" + port);
})

app.use(express.json());

// Serving Files for UI

app.get('/', (req, res) => {
    res.sendFile('C:/Users/innostax-31-03/Desktop/Taining Phase/Express-Postgres-CRUD/index.html');
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


// CRUD Endpoints

app.get('/fetchAll', async (req, res) => {
    const data = await getData();
    res.send(data);
})

app.post('/putData', async (req, res) => {
    const data = await addData(req);
    res.send(data);
})

app.put('/updateData', async (req, res) => {
    const data = await updateData(req);
    res.send(data)
})

app.delete('/deleteData', async (req, res) => {
    const data = await deleteData(req);
    res.send(data)
})