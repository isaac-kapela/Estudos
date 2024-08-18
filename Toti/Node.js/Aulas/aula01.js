const http = require("http")

const porta = 8080;

const server = http.createServer((req, res) => {
    console.log(req.method);
    res.end(`<h1>ola metodo ${req.method}</h1>`);

    if(req.method == "POST"){
        console.log("post");
    }else if(req.method == "GET"){
        console.log("get");
    }else if(req.method == "PUT"){
        console.log("put");
    }
});

server.listen(porta, ()=>{
    console.log(`servidor rodando na porta ${porta}`);
})