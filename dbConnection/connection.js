// Connection 


import pgPromise from "pg-promise";
import dotenv from 'dotenv';

const pgp = pgPromise()
dotenv.config();


// const db = pgp('postgres://postgres:user@localhost:5432/crudwithexpress')
// const db = pgp('postgres://postgres:user@localhost:5432')

export const db = pgp(`postgres://${process.env.USER}:${process.env.PWD}@localhost:5432/${process.env.DATABASE}`)


// connection in common js

// const pgp = require('pg-promise')()
// const db = pgp('postgres://postgres:user@localhost:5432')


// console.log(db.connect().then((res) => console.log("connected")))
// const res = db.query('select * from employees')
//     .then(
//         (data) =>
//             data.map((emp) => {
//                 emp['name'] = emp['name'].trim();
//                 console.log(emp)
//             }))