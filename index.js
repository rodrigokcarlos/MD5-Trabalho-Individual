const http = require ('http');
const readline = require('readline');
const porta = '3000';
const url = '127.0.0.1';
let propriedades = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const servidor = http.createServer((req,res) => {
     res.statusCode = 200;
     res.setHeader('Content-Type','text/plain');
     res.end('Servidor funcionando, MD5 Projeto!');

});

servidor.listen(porta,url, () => {
    console.log("Servidor rodando!");
})

function adicionarPropriedade() {
  rl.question('Escreva uma propriedade CSS (ou SAIR para encerrar): ', (resposta) => {
    if (resposta.toUpperCase() === 'SAIR') {
      propriedades.sort();
      console.log('Propriedades ordenadas em ordem alfabética:');
      propriedades.forEach((property) => console.log(property));
      console.log('Valeu, Falow!');
      rl.close();
    } else {
      propriedades.push(resposta);
      adicionarPropriedade();
    }
  });
}
adicionarPropriedade();