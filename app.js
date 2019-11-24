//Chamando o modulo express que foi instalado via npm, e o guardandno em uma variavel 
const express = require('express');
// a variavel express guarda TUDO vindo do modulo express

//A partir de agora iremos usar app para qualquer coisa vinda do express
const app = express();


//Criar Rota para a aplicação
app.get('/',function(req,res){
    res.sendFile(__dirname + '/html/index.html');
});

app.get('/sobre',function(req,res){
    res.send('Bem vindo a minha pagina sobre');
});


app.get('/blog',function(req,res){
    res.send('Bem vindo ao meu blog');
});

//Apos criar a rota defini os parametros que seria enviados
//Enviei um nome e um cargo
//O req é o responsavel por guardar esses parametros
//O req.params é o metodo que mostra todos os parametros em Json
app.get('/ola/:nome/:cargo',function(req,res){
    
    var nome = req.params['nome'];
    var cargo = req.params['cargo'];
    res.send("Ola " + nome + " Parabens pelo cargo de " + cargo);
});




// Deve ser a ultima linha
//Função callback para avisar que o server esta no ar 
app.listen(8081, function(){console.log('server no ar')});