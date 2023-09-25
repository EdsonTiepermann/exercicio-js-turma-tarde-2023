//Pegamos o elemento do input cep
const cep = document.querySelector('#cep');

//Pegamos o elemento do input button buscar
const botao = document.querySelector('#buscar')

//evento criado para realizar o envio de requisição
//o (e) é a captura do evento
botao.addEventListener('click', function (e) {
    // cep.addEventListener('blur', function(e) {

    //replece função para substituir um carcter
    let serch = cep.value.replace('-', '');

    //crio o objeto com as propriedades do envio para o ajax
    const Options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default' 
    }
    
    //buscar - acessa a url de onde será acessado, nesse caso a api
    // o viaCEPT
    //passa por parâmetro o cep em questão, e passa os
    //parametros necessários, como por exemplo op CORS
    //servee pra dizer que está trabalhando com os servidores
    //diferentes, como se fosse um permissão de acesso
    fetch('https://viacep.com.br/ws/${search}/json/', Options)

        //quando utilizamos o fetch ele retorna uma promessa,
        //ele é assincrono, então fazemos as verificações abaixo
        //então faça algo, nesse caso crio uma função onde pego o
        //"responde" a resposta, no formato json
        .then(function (response) {
            response.json()
                //o json tbem retorna uma promessa, então precisamos verificar
                //se der certo nesse caso retorna os dados p nós
                .then(function (data) {
                    console.log(data);
                })
        })

        //se der errado faz outra coisa
        .catch(function (e) {
            console.log('Error: ' + e.message);
        })
    //console.log(search):
}
)



