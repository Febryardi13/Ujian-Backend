const db = require('../connections/mysql')

module.exports = {
    getMovcat:(req,res)=>{
        var sql = `SELECT v.*,
                        m.nama as namamovie, c.nama as namacategory
                   FROM movcat v
                        left join movies m on v.idmovie = m.id
                        left join categories c on v.idcategory = c.id
                   ORDER BY v.id`
        db.query(sql, (err,getResult)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(getResult)
        })
    },
    postMovcat:(req,res)=>{
        const {idmovie, idcategory}=req.body
        let data = {
            idmovie, idcategory
        }

        var sql = `INSERT INTO movcat SET ?`
        db.query(sql, data, (err, postResult)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(postResult)
        })
    },
    deleteMovcat:(req,res)=>{
        const idmovie = req.params.id
        const data ={
            idmovie
        }

        var sql = `DELETE FROM movcat WHERE idmovie = ?`
        db.query(sql,[data], (err, deleteResult)=>{
            if(err) res.status(500).send(err)
            res.status(200).send(deleteResult)
        })
    }
}