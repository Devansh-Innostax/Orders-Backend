import { db } from "../dbConnection/connection.js"

// Fetch Data 

export const getData = async () => {
    try {
        const res = await db.query("select * from orders")
        return res;
    }
    catch (e) {
        throw e;
    }
}

// Add Data

export const addData = async (req) => {
    const { order_id, user_id, price, user_name } = req.body;

    try {
        const res = await db.query('insert into orders values($1,$2,$3,$4) returning *', [order_id, user_id, price, user_name]);
        return res;
    }
    catch (e) {
        throw e;
    }
}


// Update Data

export const updateData = async (req) => {
    const { order_id, price, user_name } = req.body;
    try {
        const res = await db.query('update orders set price=$2,user_name=$3 where order_id=$1 returning *', [order_id, price, user_name]);
        return res;
    }
    catch (e) {
        throw e;
    }
}

// Delete Data

export const deleteData = async (req) => {
    const { order_id } = req.body;
    const res = await db.query('delete from orders where order_id=$1 returning *', [order_id]);
    return res;
}