//Pediram para nós desenvolver uma aplicação web capaz de converter graus Celcius em Fahrenheit
import express from 'express'; //permite criar aplicações web de forma expressa;

//O ip 0.0.0.0 representa todas as placas de rede do computador que está executando essa aplicação
const host = '0.0.0.0'; 
//A porta identifica o programa  dentre tantos outros programas 
//que estão em execução no computador que esteja executando essa aplicação.
const porta = 3000; 


const app = express();

//requisição vem da Internet
//A resposta é enviada para a Internet para quem fez a requisição


function exibetabuada(requisicao, resposta){
    //extrair da url da requisição o valor desejado pelo usuário  
    let numero = parseInt(requisicao.query.tabuada);
    let resultado;
    if (!numero){
        valorDesejado = 1;
    }
    resposta.write('<!DOCTYPE html>');
    resposta.write('<html>');
    resposta.write('<head>');
    resposta.write('<meta charset="utf-8">');
    resposta.write('<title>Tabuada</title>');
    resposta.write('</head>');
    resposta.write('<body>');
    resposta.write('<h1>Tabuada do ' + tabuada+'<h1>');
    if (numero > 0){
        for(i=1;i<11;i++)
        {
            resultado=parseInt(i*numero);
            resposta.write('<p>'+numero+' * '+ i +' = ' + resultado + '</p>\n');
        }
        
    }
    else{
        resposta.write('<h1>Informe o parâmetro valor na url:   http://localhost:3000/tabuada?valor=100</h1>');
    }
    resposta.write('</body>');
    resposta.write('</html>');
    resposta.end();
}


app.get("/tabuada",Exibetabuada);
//( ) => {}  = função anônima conhecida como arrow function
app.listen(porta, host, () => {
    console.log("Servidor está executando em http://" + host + ":" + porta);
});