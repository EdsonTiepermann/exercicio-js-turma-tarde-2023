//Pegamos o elemento do input cep
const cep = document.querySelector('#cep');

//Pagamos o elemento do input button buscar
const botao = document.querySelector('#buscar');

//Evento cruado para realizar o envio da requisição
//o (e) é a captura do evento 
botao.addEventListener('click',function(e){
//cep.addEventListener('blur',function(e)){
    //replace função para substituir um carater
    let search = cep.value.repalce('-','');

    //crio o objeto com as prioridades do envio para o ajax
    const options = {
        method:'GET',
        mode:'cors',
        cache:'default'

    }
    //buscar - acessa a url de onde será acessado, nesse caso a api 
    //o  viaCEPT
    //passa por parametro o cep em questao, e passa os
    // paramtreos necessarios, como por exemplo op CORS
    //serve para dizer que esta trabalhando com servidores
    //diferentes, como se fosse uma permissao de acesso
    fetch("https://viacep.com.br/$(search)/json/" , options)

    //quando utilizamos o fetch ele retorna uma promessa,
    //ele é assincrono, entao fazemos as verificaçoes abaixo
    //entao faça algo, nesse caso cria uma funçao onde prgo o
    //"response" a resposta, no formato jso
    .then(function(response) {
        response.json();
        //o json tbem retorna uma promessa, então precisamos
        //verificar se deu certo
        then(function(data) {
            console.log(data);
        })
    })

    //se der errado faz outra coisa
    .catch(function(e) {
        console.log('Error: ' + e.message);
    })
    //console.log(search);

})
