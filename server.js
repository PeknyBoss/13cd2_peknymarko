const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
 
app.use(cors());
app.use(bodyparser.json());
 
const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        port: "3307",
        password: "",
        database: "teliolimpia"
 
    })
//A szerver futásásak ellenőrzése
 
app.get("/", (req, res) => {
    res.send("A szerver működik!")
})
app.get("/v", (req, res) => {
    const sql = "SELECT * FROM `versenyzok`";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    }
    )
}
)
app.get("/v6/:id",(req, res) => {
    const sql = "SELECT * FROM `versenyzok` WHERE ID= 6";
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    }
    )
}
)
app.post("/vuj",(req,res) => {
    const sql = "INSERT INTO 'versenyzok'('ID','versenyzo') VALUES(?,?)";
    const values =[req.body.ID, req.body.versenyzo];
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({error:"Hibás adatbázis művelet!"});
        return res.json(result);
    })
}
)
 
 
app.listen(3000, () => {
    console.log('A szerver a 3000-es porton fut!')
})
