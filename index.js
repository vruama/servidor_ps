var express = require("express");
var app = express();
//Pega a porta que o servidor oferece ou a 3000
var port = process.env.PORT || 3000;
var hostname = "localhost";
const json = '[{"nome":"vans", "sobrenome":"ruama", "altura":1.69}, {"nome":"tabatta", "sobrenome":"de sousa", "altura":1.74}]';
var objeto = JSON.parse(json);

app.get("/", function(req, res){
    var nome = req.query.nome;
    res.send("Dado: " + objeto.sobrenome);
    console.log("Passei aqui!");
});

app.get("/users", function(req, res){
    console.log("Passei aqui!");
});

//Escuta a porta o tempo todo
app.listen(port, hostname, () => {
    console.log("Servidor http://" + hostname + ":" + port);
});