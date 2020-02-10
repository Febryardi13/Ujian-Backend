const db = require('../connections/mysql')

module.exports = {
    getMovie:(req,res)=>{
        var sql = `SELECT * FROM movies`
        db.query(sql, (err,getResult)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(getResult)
        })
    },
    postMovie:(req,res)=>{
        const {nama, tahun, description}=req.body
        let data = {
            nama, tahun, description
        }

        var sql = `INSERT INTO movies SET ?`
        db.query(sql, data, (err, postResult)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(postResult)
        })
    },
    updateMovie:(req, res)=>{
        const {id,nama, tahun, description}=req.body
        let data = {
            id,
            nama,
            tahun,
            description
        }

        var sql = `UPDATE movies SET ? WHERE id =${id}`

        db.query(sql,data, (err,updateResult)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(updateResult)
        })
    },
    deleteMovie:(req,res)=>{
        const id = req.params.id
        const data ={
            id
        }

        var sql = `DELETE FROM movies WHERE id = ?`
        db.query(sql,[data], (err, deleteResult)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(deleteResult)
        })
    }
}