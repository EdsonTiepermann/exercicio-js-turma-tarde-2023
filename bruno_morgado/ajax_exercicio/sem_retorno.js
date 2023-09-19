// Pegamos o elemento do input cep
const botao = document.querySelector("#buscar");

//evento criado para realizar o envio da requisicão
// o (e) é a captura do evento

botao.addEventListener("click", function (e) {
  // cep.addEventListener('blur', function(e))

  // replace funcao para substuiruir um caracter
  let search = cep.value.replace("-", "");

  // crio o objeto com oas propriedades do envio para o ajax
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  //buscar - acessa a url de onde será acessado, nesse caso a api
  // o viacept
  // pasa por parametro o cep em questão, e passa os
  // parametros necessários, como por exemplo op CORS
  // serve para dizer que está trabalhando com servidores
  // diferentes, como se fosse uma permissão de acesso

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    // quando utilizamos o fetch ele retorna uma promessa,
    // ele é assincrono, então fazemos as verificações abaixo
    // então faça algo, nesse caso crio uma função onde pego o
    //"response" a resposta, no formato json

    .then(function (response) {
      response
        .json()

        // o json tambem o retorna uma promessa, então precisamos verificar
        // se der ceto nesse caso retorna os dados para nós

        .then(function (data) {
          console.log(data);
        });
    })

    //se der errado faz outra coisa
    .catch(function (e) {
      console.log("Error:" + e.message);
    });
});
