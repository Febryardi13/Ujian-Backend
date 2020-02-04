// Import database
const db = require('../connections/mysql')

module.exports={
    //Create data
    postStore:(req,res) =>{
        //Get data from front-end, contoh dibawah ini hanya data productName saja bisa ditambahkan dengan attribute lain
        const {storeName} = req.body

        //Set data for Database
        let data = {
            storeName
        };
         
        //query sql
        var sql = `INSERT INTO store SET ?`;

        //Database Action
        db.query(sql, data, (err, postResult)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(postResult)
        })
    },
    getStore:(req,res)=>{
        //sintak sql
        var sql = `SELECT * FROM store`;

        //database action
        db.query(sql, (err,getResult)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(getResult)
        })
    },
    updateStore:(req,res)=>{
        //get data from front-end
        let {storeId,storeName} = req.body // khusus post sama update yang hanya bisa req.body

        let data={
            storeId,
            storeName //nama kolom didatabase harus sama
        }

        var sql = `UPDATE store SET ? WHERE storeId =${storeId}`;

        //database action
        db.query(sql, data, (err, updateResult)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(updateResult)
        })
    },
    deleteStore:(req,res)=>{ //delete data store & product (constraint methodd)
        //Get Id
        const storeId = req.params.id
        let data = {
            storeId
        }

        var sql = `DELETE FROM store WHERE storeId = ?`

        db.query(sql, [data], (err, deleteResult)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(deleteResult)
        })
    }
}