/*
Abaixo de 17 muito abaixo do peso
entre 17 e 18,49 abaixo do peso
entre 18,5 e 24,99 peso normal
entre 25 e 29,99 acima do peso
*/

// peso / (altura * altura)

let peso;
let altura;
let imc;
let resultado;

function calcular(event){ //desta forma o 'event' apos clicar em calcular zera os dados
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    imc = peso / (altura * altura);

    event.preventDefault(); //esta linha de cos faz com o 'event' não zere os dados digitados no formulário


  
        if (imc < 17){
            resultado = document.getElementById('resultado').innerHTML = ('muito abaixo do peso')
        }else if (imc <= 18.49){
            resultado = document.getElementById('resultado').innerHTML = ('abaixo do peso')
        }else if (imc <=24.99){
            resultado = document.getElementById('resultado').innerHTML = ('peso normal')
        }else{
            resultado = document.getElementById('resultado').innerHTML = (`Seu IMC foi de ${imc.toFixed(2)} cuidado vc esta acima do peso`)
        }

        document.getElementById('peso').value = '' //estas duas linhas de cod estão zerando nosso campo de daos após clicar em calcular
        document.getElementById('altura').value = ''
}