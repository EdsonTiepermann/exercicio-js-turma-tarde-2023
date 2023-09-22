// pegamos o elemento do input cep
const cep = document.querySelector('#cep');

// pegamos o elemento do input button buscar
const botao = document.querySelector('#buscar');

// evento criado para realizar o envio da requisicao o (e) eh a captura do evento
botao.addEventListener('click', function(e) {
    // cep.addEventListener('blur', function(e)) {

    // replace funcao para substituir um caracter
    let search = cep.ariaValueMax.replace('-', '');

    // crio o objeto com as propriedades do encio para o ajax
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'

        // buscar - acessa a url de onde sera acessado, nesse caso a api viaCEPT
        // passa por parametro o cep em questao, e passa os parametros necessarios, como por exemplo op CORS serve pra dizer que esta trabalhando com servidores diferentes,como se fosse uma permissao de acesso
        fetch('https://viacep.com.br/ws/${search}/json/', options)

        // quando utilizamos o fetch ele retorna uma promessa, ele eh assinocrono,entao fazemos as verificacoes abaixo entao faça algo, nesse caso crio uma funçao onde pego o "response" a resposta, no formato json
        .then(function(response) {
            response.json()
            // o json tambem retorna uma promessa, entao precisamos verificar se deu certo
            // se der certo nesse caso retorna os dados p nos
            .then(function(data) {
                console.log(data);
            })
        })

        // se der errado faz outra coisa
        .catch(function(e) {
            console.log('error: ' + e.message);
        })
        // console.log(search);
    }
    })