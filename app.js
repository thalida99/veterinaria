const express = require ('express')
const app = express()

const port = process.env.PORT || 3000

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


app.use(express.static(__dirname + '/public'))
//rutas web
app.use("/",require("./router/RutasWeb"))
app.use("/mascotas",require("./router/Mascotas"))

app.use ((req, res, next) => {
    res.status(404).render("404")
})

app.listen(port, () => {
    console.log('Servidor a su servicio', port)
})