//Pegamos o elemnto do input cep
const cep = document.querySelector('#cep');

//Pegamos o elemnto do input button buscar
const botao = document.querySelector('#buscar');

//evento criado para realizar o envio da requisção
//o (e) é a captura do vento
botao.addEventListener('click' ,function(e) {
    // cep.addEventListener('blur', function name(params) {
        
    // })

    //replace função para substituir um caracter
    let search = cep.value.replace('-','');
    //crio o objeto com as propriedades do envio  para O Ajax

    const options = {
        method:'get',
        mode: 'cors',
        cache: 'default'
    }

    //buscar - acessa a url de onde será acessado, nesse caso a api
    // o viaCept
    //passa por parâmetro o cep em questão, e passa os
    //parametros necessario, como por exemplo op CORS
    //serve para dizer que está trabalhando com os servidores
    //diferentes, como se fosse uma permissão de acesso
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)

    //quando utilizamos o fetch ele retorna uma promessa,
    //ele é asscincrono, então fazemos as verificações abaixo
    //então faça algo , nesse caso crio uma função onde pego o
    // "response a" a resposta, no formato json
    .then(function (response) {
        response.json()
        //o json tbem retorna uma promessa, então precisamos verificar
        //se der certo nesse caso retorna os dados para nós
        .then (function (data){
            console.log(data);
        })
        
    })

    //se der errado faz outra coisa
    .catch(function(e){
        console.log('Error:' + e.message);
    //console.log(search);

    })

    
})

