1. Faça um script que uma variável receba um número (de 1 a 12) e retorne o mês correspondente como uma string no console. Por exemplo, se a entrada for 2, deverá retornar “fevereiro”, pois este é o 2° mês.

2. Faça um script que verifique se um número inteiro é divisível por 3. Mostrar no console a mensagem se é divisível ou não.

3. Faça um script que receba a hora e retorne no console a mensagem entre 00h e 12h "Bom dia!", entre 12h e 18h "Boa tarde!", e entre 18h e 00h "Boa noite!".

4. Faça um script capaz de encontrar o menor dentre 3 números inteiros quaisquer dados pelo teclado e retorne a resposta no console.

5. Faça um script que verifique se uma letra armazenada numa variável é vogal ou consoante e retorne a resposta no console.

6. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
    A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
    A mensagem "Reprovado", se a média for menor do que sete;
    A mensagem "Aprovado com Distinção", se a média for igual a dez.

7. Fazer um script que receba o valor do salário mínimo e o valor do salário de uma pessoa. Calcular e imprimir quantos salários mínimos ela ganha. Se a pessoa ganhar menos de 1 salário mínimo, retornar na tela "baixa renda". Se a pessoa ganhar entre 1 salário mínimo e 5 salários mínimos, retornar na tela "classe média". Se a pessoa ganhar mais de 5 salários mínimos, retornar na tela "classe alta". Base salário mínimo 1212. Salário da pessoa irá ser dada pela variável.

8. Em uma loja e CDs existem apenas quatro tipos de preços que estão associados a cores. Assim os CDs que ficam na loja não são marcados por preços e sim por cores. Desenvolva o script que a partir da entrada da cor, mostre o preço no console. A loja está atualmente com a seguinte tabela de preços:
    Preços
    verde = 10;
    amarelo = 20;
    vermelho = 30;
    azul = 40;

__________________________________________________________________________________________________________________________________________________________________________________________________________________________

Exercícios dia 27-07-2023

1- Obtenha uma entrada com o nome de um mês e mostre na tela a estação do ano relacionada ao mês.

  E apresente no console um texto referente ao que vai ser mostrado e a variável em questão.
  
  	-console.log(“o texto digitado” + variavel);
  
  -Março, Abril, Maio - Outono
  
  -Junho, Julho, agosto - Inverno
  
  -Setembro, Outubro, Novembro - Primavera
  
  -Dezembro, Janeiro, Fevereiro - Verão

2- Desenvolva uma calculadora com as 4 operações básicas (soma, subtração, divisão e multiplicação). Receba 2 valores e qual operação a ser realizada, e apresente o cálculo e qual operação na tela

console.log(“texto” + variavel);

3- Em uma empresa o salário base é de 2000 reais, se o colaborador tiver o cargo de gerente tem uma acréscimo de 10% no salário, caso o colaborador for supervisor, tem um acréscimo de 50% no salário, e caso for outro cargo o salário é o base.
	Receba uma entrada com o cargo do colaborador, e apresente na tela o cargo e o salário.

console.log(“texto” + variavel);

4- Escreva um script que receba o peso em kg e uma altura em m e a partir desses valores calcule o índice de massa corpórea do utilizador.

imc = peso / (altura * altura)

![image](https://github.com/EdsonTiepermann/exercicio-js-turma-tarde-2023/assets/33090891/802fee87-849d-4297-8c4b-666ff4839526)

E mostre na tela em qual grau o usuário se enquadra.

console.log(“texto” + variavel);

if …else

5- Compras, crie um script com a seguinte situação. Uma variável com valor total da compra.
        tipos de pagamentos (pix, débito, crédito, parcelado no cartão, parcelado no carnê).
        se for pix, aplica-se um desconto de 10%;
        se for no débito, valor original;
        se for crédito em 1x, acréscimo de 5%;
        se for parcelado no cartão, acréscimo de 10% por parcela;
        se for parcelado no carnê, acréscimo de 20% por parcela;

        se a compra for feita em cartão, tanto em crédito ou em débito, 
        verificar se tem o valor disponível no cartão;
        o valor do cartão será dada por uma variável

        variaveis: formaPagamento; valorTotal; 

        aparecer a forma de pagamento, em quantas vezes foi escolhido, 
        se for parcelado aparecer o valor total e valor de cada parcela.

__________________________________________________________________________________________________________________________________________________________________________________________________________________________

Exercícios dia 03-08-2023

01 - Escrever um algoritmo para mostrar os números ímpares entre 100 e 200

02 - Escrever um algoritmo que leia um valor para uma variável N de 1 a 10 e calcule a tabuada de
N. Mostre a tabuada na forma: 0 x N = 0, 1 x N = 1N, 2 x N = 2N, ..., 10 x N = 10N

03 - Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 1 até 500

04 - Escrever um script que leia número de 0 a 999. Desses, fazer a soma apenas dos ímpares e mostrar na tela. Mostrar também o total de números ímpares e pares. E por fim, fazer a média aritmética da soma dos números divisíveis por 3

__________________________________________________________________________________________________________________________________________________________________________________________________________________________

Exercícios dia 08-08-2023

01 - Escrever um algoritmo que leia 10 números e conte quantos deles estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. mostre na tela a quantidade de vezes que aparece cada intervalo.

02 - Crie um vetor (array) e um número.
Mostre todos os índices onde esse número aparece no vetor, e não só apenas o primeiro e/ou  último índice em que o número aparece.

03 - Faça um algoritmo que leia 6 valores positivos.
Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos números lidos.

04 - Crie um script que receba 3 números, coloque em um array, depois exiba tal array.
Modifique os elementos do array de modo a sequência de números ficar do contrário.
Ou seja, se digitou: 1,2,3
Vai aparecer: 3,2,1

05 - Escreva um script que leia 15 números positivos, encontre o maior deles e o menor deles, e mostre na tela. Faça isso na mão, não invoque nenhum método de sorting. Dica pesquisa sobre bubble sort.


	<script>
	let array = [3,5,7,2,1,1,9,8,6];
	 console.log("antes ", array);

 	for (let i = 0; i < array.length; i++ ){
    	 for  (let j = 0; j < array.length; j++){
         if (array[j] > array[j + 1]) {
             [array[j], array[j + 1]] = [array[j + 1], array[j]]
         }
     	}
	}
 	console.log("depois ", array);

	</script>

__________________________________________________________________________________________________________________________________________________________________________________________________________________________

Exercícios dia 10-08-2023 e 15-08-2023

01 - Temos um vetor de 5 posições, com o nome de 5 itens que nosso herói carrega na mochila. Quando o personagem chega numa porta, queremos detectar automaticamente se ele tem ou não uma chave para deixá-lo passar. Verifique percorrendo o vetor, comparando se cada item tem o nome “chave” e retorne verdadeiro se encontrar alguma. Caso contrário, a função deve retornar falso. Dependendo do retorno deverá mostrar uma resposta na tela.


02 - Uma eleição possui 2 candidatos a prefeito: o candidato José, do Partido da Felicidade e o candidato João, do Partido da Esperança. Os eleitores votam nos candidatos pelo número do partido. Para votar no candidato José do Partido da Felicidade, precisam digitar o número 1. Para votar no candidato João, do Partido da Esperança, precisam digitar o número 2.
Faça um script que simule uma urna eletrônica. Temos 7 eleitores, cada eleitor poderá digitar um voto. Informe quantos votos cada candidato teve e qual deles ganhou a eleição.

03 - Imagine o seguinte cenário: Marcelo lhe deve um dinheiro e promete pagar em parcelas mensais de R$ 70.
Com o intuito de prever qual seria o valor devedor após o decorrer de 12 meses, você resolve escrever algumas linhas de código.
Levando em consideração que o valor devido por Marcelo era de R$ 1400, qual seria o total devido após 12 meses?


__________________________________________________________________________________________________________________________________________________________________________________________________________________________

Desafio dia 17-08-2023 e 22-08-2023

Desafio array

    Cada unidade tem uma receita base. Essa receita base será nosso comparativo para o caixa atual.
    Cada unidade tem "x" pastas; Precisa bater 20 pastas. [array]

    Se bater 20 pastas, contabiliza tanto pra positivo, quanto pra negativo o valor do caixa.
    Se não bater 20 pastas, valor positivo não contabiliza, apenas valor negativo contabiliza.

    A diferença entre o valor total de caixa atual com o valor total da base MAIS o valor do gerente, precisar ser maior que 20 mil.

    Se chegar a 20 mil positivo, recebe 800 de meritocracia.
    A cada 20 mil, ganha 800 reais.
    Menos de 20 mil não recebe meritocracia.

    Acima de 20 mil, caso não fechar outra merito(exemplo 40 mil), recebe proporcional.

    Mostrar o valor entre a soma do valor total da base e o valor total atual do caixa.
    Mostrar o valor total da meritocracia à receber (caso tenha batido).
    Mostrar o valor total do gerente, caso não tenha batido a meritocracia.

        baseGerente = 0;
        minimoMerito = 20000;

        let baseUnidade = [
            132091.35,
            107262.59,
            24422.35,
            28889.29,
            148347.45,
            64635.84,
            30421.26,
            15000,
            22585.53
        ];
        let caixaAtual = [
            139204.36,
            99152.61,
            27806.93,
            35363.27,
            173191.01,
            61822.37,
            28306.43,
            46928.11,
            18644.67
        ];
        let pastasUnidades = [
            87,
            24,
            47,
            20,
            35,
            15,
            42,
            29,
            29
        ];



	 let somaBaseAtual = 0;
	    let somaBaseAnterior = 0;
	    let merito = 0;
	    let valorMerito = 800;
	    let meritoGanho = 0;
	
	    for (let index = 0; index < pastasUnidades.length; index++) {
	        somaBaseAnterior = somaBaseAnterior + baseUnidade[index];
	        if (pastasUnidades[index] >= 20) {
	            somaBaseAtual = somaBaseAtual + caixaAtual[index];
	        }
	        if (pastasUnidades[index] < 20) {
	            if (caixaAtual[index] > baseUnidade[index]) {
	                somaBaseAtual = somaBaseAtual + baseUnidade[index]
	            }
	            if (caixaAtual[index] < baseUnidade[index]) {
	                somaBaseAtual = somaBaseAtual + caixaAtual[index]
	            }
	        }
	    }
	
	    console.log(somaBaseAnterior);
	    console.log(somaBaseAtual);
	
	    merito = somaBaseAtual - somaBaseAnterior + baseGerente;
	    console.log(merito);
	
	    if (merito >= minimoMerito) {
	        meritoGanho = (merito / minimoMerito) * valorMerito;
	        console.log(meritoGanho);
	    } else {
	        console.log('TENTE OUTRA VEZ');
	    }
	
	</script>
	<!-- 2.270,56 -->
__________________________________________________________________________________________________________________________________________________________________________________________________________________________

Exercícios dia 24-08-2023

01- Escreva uma função que realize uma soma e mostre o resultado no console.log.

02- Escreva uma função calculadora que na sua chamada receba uma das operações básicas e dois valores para o cálculo, apresente no console.log a operação escolhida e o resultado.

03- Escreva uma função que, de acordo com a opção escolhida, mostrará as opções para o usuário. As opções serão:

		        Gênero 		Classificação Indicativa
		        Ação 		14
		        Romance 	10
		        Comédia 	8
		        Animação 	Livre
		        Suspense 	16
		        Terror 		18


Após ter sido escolhido a opção, terá que verificar a classificação indicativa do filme. Se o usuário tiver o mínimo de idade para a classificação do genêro do filme, retorne no console "Bom Filme"; Caso a idade do usuário não ter o mínimo da classificação do genêro do filme, retorne no console "Esse título não é para sua Idade", e mostre os Gêneros que a idade > do usuário pode assistir.


__________________________________________________________________________________________________________________________________________________________________________________________________________________________

Exercícios dia 29-08-2023

01- Crie um formulário em html com o que você aprendeu na aula de HTML, porém utilize o framework Bootstrap para criação do layout, envie as informações para o mesmo arquivo de criação do layout e utilize o method get. Lembrando que o button deve ser do tipo submit.

02- Crie um layout com alguns componentes do bootstrap a sua e

__________________________________________________________________________________________________________________________________________________________________________________________________________________________

Exercícios dia 01-09-2023

1 - Em uma página HTML, utilizando input, insira uma idade e verifique de forma dinâmica se é menor ou  maior de idade, se a idade for maior ou igual a 18 anos, deixe o background da tela com a cor black e com o texto informando que a idade é maior de idade com a cor silver, se for menor de idade, deixar o background vermelho com as fonts na cor white.

	    <div class="row">
	        <div class="col-4"></div>
	        <div class="col-4">
	            <h3 id="res">Digite uma idade:</h3>
	        </div>
	    </div>
	
	    <div class="row mt-3 mb-3">
	        <div class="col-6">
	            <input type=" text " class="form-control" id="idade" placeholder="Idade">
	        </div>
	        <div class="col-6 ">
	            <button type="button" id="btn-idade" onclick="verIdade();" class="col-12 btn btn-primary">Verificar Idade</button>
	        </div>
	    </div>
	
	    <div class="row">
	        <div class="col-4"></div>
	        <div class="col-4">
	            <p id="texto" class="fs-1 bg-light">Verifique sua idade:</p>
	        </div>
	
	    </div>
	    <script>
	        function verIdade() {
	            var idade = document.getElementById("idade").value;
	
	            var numIdade = parseInt(idade);
	
	            const body = document.getElementById("texto");
	
	            if (numIdade >= 18) {
	                body.classList.replace("bg-light", "bg-dark");
	                body.style.color = "silver";
	
	            } else if (numIdade < 18) {
	                body.classList.replace("bg-light", "bg-danger");
	                body.style.color = "white";
	            }
	
	
	        }
	    </script>
	</body>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js " integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm " crossorigin="anonymous "></script>


02- Utilizando eventos DOM e uma página HTML, escreva uma função calculadora que na sua chamada receba uma das operações básicas e dois valores para o cálculo, apresente na tela a operação escolhida e o resultado.

03- Escreva uma função que, de acordo com a opção escolhida, mostrará as opções para o usuário. As opções serão:

        Gênero 	Classificação Indicativa
        Ação 		14
        Romance 	10
        Comédia 	 8
        Animação 	Livre
        Suspense 	16
        Terror 	18

Após ter sido escolhido a opção, terá que verificar a classificação indicativa do filme. Se o usuário tiver o mínimo de idade para a classificação do gênero do filme, retorne na tela "Bom Filme"; Caso a idade do usuário não ter o mínimo da classificação do gênero do filme, retorne na tela "Esse título não é para sua Idade", e mostre os Gêneros que a idade > do usuário pode assistir.


 04 - Faça um programa com layout (bootstrap ou html e css) aonde o usuário informa 3 notas de um aluno. Em seguida calcule a média do aluno e dar o seguinte resultado: A mensagem "Aprovado" com o fundo na cor amarela e a fonte na cor preta, se a média alcançada for maior ou igual a sete; A mensagem "Reprovado" com o fundo vermelho e a fonte branca, se a média for menor do que sete; A mensagem "Aprovado com Distinção" com o fundo verde e a fonte branca, se a média for igual a dez.

05 - Faça um script que verifique se um número inteiro é divisível por 3. Mostrar no console a mensagem se é divisível ou não.

	<body>
    <!-- Faça um script com layout que verifique se um número inteiro 
        é divisível por 3.
 Mostrar no console a mensagem se é divisível ou não se for deixar o fundo 
 da div na cor verde e texto na cor branca, senão fundo na cor vermelha
 e texto na cor branca. -->

    <div class="input-group mb-3">
        <!-- <span class="input-group-text" id="basic-addon1">Inseir um número</span> -->
        <input type="text" id="numero" class="form-control" placeholder="Digitar um número">
    </div>

    <button type="button" id="btn-verificar" onclick="verificarDivisivel()" class="btn btn-primary">Verificar</button>

	</body>

	<script>
    function verificarDivisivel() {
        // alert("oi");
       let num = parseInt(document.getElementById("numero").value);
        let result = 0;
        result = num % 3;
        // console.log(num);

        let btn = document.getElementById("btn-verificar");

        if (num % 3 == 0) {
            // if (result == 0) {
            btn.classList.replace("btn-primary", "btn-success");
            btn.innerHTML = "É divisível por 3";
        } else {
            btn.classList.replace("btn-primary", "btn-danger");
            btn.innerHTML = "Não eh divisível por 3";
        }
    }
	</script>

 __________________________________________________________________________________________________________________________________________________________________________________________________________________________

Exercícios dia 08-09-2023

01 - Criar um input, para incluir números a um array, e fazer a ordenação dinamicamente a cada nova inserção de um número. Mostrar na tela os números ordenados (toda vez que adicionar um novo número)


02 - Faça um script de uma calculadora IMC, com input de adicionar altura, outro de adicionar o peso, o botão calcular IMC, e mostrar o resultado na tela.

Calcular IMC
    IMC = peso / (altura * altura)
    menor que 18.5 - abaixo do peso normal
    18.5 - 24.9 - peso normal
    25 - 29.9 - excesso de peso
    30 - 34.9 - obesidade classe I
    35 - 39.9 - obesidade classe II
    maior ou igual a 40 - obesidade classe III

03 - Faça um conversor de temperatura (o usuário pode escolher de Celsius para Fahrenheit, ou vice-versa): deverá ter um input para o valor, input tipo radio para escolher para qual escala de temperatura irá converter, e o botão, além de mostrar o resultado na tela. "A temperatura em graus X é 0000"

04 - Adicione vários números em uma única string, separados com vírgula, em algum evento do JS transforme a string em um array, apresenta o array na tela, e também a soma de todos os valores em suas posições.



	<body>
	    <!-- Adicione vários números em uma única string, separados com vírgula, em algum evento do JS transforme a string em um array, 
	    apresente o array na tela, e também a soma de todos os valores em suas posições. -->
	
	    <div class="row col-12 mt-4">
	        <div class="col-2"></div>
	        <div class="input mb-3 col-4">
	            <input type="text" id="num" class="form-control" placeholder="Adicione um numero">
	        </div>
	        <button type="button" onclick="adicionar()" class="btn btn-outline-secondary col-2">Adicionar</button>
	    </div>
	
	    <div class="row col-12 mt-4">
	        <div class="col-4"></div>
	        <div class="input mb-3 col-4">
	            <input type="text" id="result1" class="form-control mb-3" placeholder="Resultado Array">
	            <input type="text" id="result2" class="form-control" placeholder="Resultado Soma Array">
	        </div>
	    </div>
	
	</body>
	<script>
	    function adicionar() {
	        var inputNumber = document.getElementById("num").value;
	        var inputText1 = document.getElementById("result1");
	        var inputText2 = document.getElementById("result2");
	        var array = [];
	        var total = 0;
	        array = inputNumber.split(',');
	
	        for (let i = 0; i < array.length; i++) {
	            total += Number(array[i]);
	        }
	
	        inputText1.value = array;
	        inputText2.value = total;
	
	        console.log(array);
	        console.log(total);
	    }
	</script>
