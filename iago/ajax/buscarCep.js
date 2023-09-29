// Pegamos o elemento do input cep
const cep = document.querySelector("#cep");

// Pegamos o elemento do input button buscar
const botao = document.querySelector("#buscar");

// evento criado para realizar o envio da requisição
// o (e) é a captura do evento
// botao.addEventListener("click", function (e) {
cep.addEventListener("blur", function (e) {
  // replace função para substituir um caracter
  let search = cep.value.replace("-", "");

  // crio o objeto com as propriedadees do envio para o ajax
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  // buscar - acessa a url de onde será acessado, nesse caso a api o viaCEPT passa
  // por parâmetro o cep em questão, e passa os parâmetros necessário, como por exemplo op CORS
  // serve para dizer que está trabalhando com servidores  diferentes, como se fosse uma permissão de acesso
  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    // Quando utilizamos o fetch ele retorna uma promessa, ele é assincrono, então fazemos as verificações
    // abaixo, então faça algo, nesse caso crio uma função onde pego o "response" a resposta, no formato json
    .then(function (response) {
      response
        .json()
        // o json também retorna uma promessa, então precisamos verificar
        // se der certo nesse caso retorna os dados para nós
        .then(function (data) {
          console.log(data);

          for (endereco in data) {
            document.getElementById("logradouro").value = data["logradouro"];
            document.getElementById("bairro").value = data["bairro"];
            document.getElementById("localidade").value = data["localidade"];
            document.getElementById("uf").value = data["uf"];
          }
        });
    })

    // se der errado faz outra coisa
    .catch(function (e) {
      console.log("error: " + e.message);
    });
  // console.log(search);
});
