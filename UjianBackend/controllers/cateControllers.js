const db = require('../connections/mysql')

module.exports = {
    getCate:(req,res)=>{
        var sql = `SELECT * FROM categories`
        db.query(sql, (err,getResult)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(getResult)
        })
    },
    postCate:(req,res)=>{
        const {nama}=req.body
        let data = {
            nama
        }

        var sql = `INSERT INTO categories SET ?`
        db.query(sql, data, (err, postResult)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(postResult)
        })
    },
    updateCate:(req, res)=>{
        const {id,nama}=req.body
        let data = {
            id,
            nama
        }

        var sql = `UPDATE categories SET ? WHERE id =${id}`

        db.query(sql,data, (err,updateResult)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(updateResult)
        })
    },
    deleteCate:(req,res)=>{
        const id = req.params.id
        let data = {
            id
        }

        var sql = `DELETE FROM categories WHERE id = ?`

        db.query(sql, [data], (err, deleteResult)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(deleteResult)
        })
    }
}