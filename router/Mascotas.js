const express = require ("express")
const router = express.Router()

router.get("/",(req,res) => {
    res.render("mascotas", {
        arrayMascotas:[
            {id:"vghv", nombre: "Rex",   descripcion: "Rex-descripcion"},
            {id:"jsfhsjf", nombre: "Dan", descripcion: "Dan-descripcion"}
    ]
    })
})

module.exports = router