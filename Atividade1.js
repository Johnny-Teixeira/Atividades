//tividades
//1. Crie as variáveis peso e altura leia e as inicialize com seu peso e sua altura. Calcule o valor do IMC
//(peso / altura2).Associe o valor verdadeiro a variável obeso caso o valor do IMC seja maior ou igual
//a 30. Imprima o texto, substituindo os valores em itálico pelas respectivas variáveis: O valor do IMC
//para o peso de peso quilos e altura metros é de imc.

let peso = prompt('Digite seu peso:')
let altura = prompt('Digite sua altura:')
let imc = peso/(altura^2)
let obeso = imc >= 30 ? "Você está obeso" : "você não está obeso";

console.log(`O valor do IMC para a altura de ${altura} metro e peso de ${peso} quilos é = ${imc.toFixed(2)}, logo ${obeso}`)

//2.Leia um número e aplique sobre ele a conjectura de Collatz.
//Ela diz que uma sequencia pode ser feita com base na seguinte
//regra:
//Se o número n for par, o próximo é n / 2
//Se for ímpar é 3n+1
//A sequencia termina em 1

let n = prompt('Digite um numero qualquer:');
while (n != 1) {
    if (n % 2 == 0) {
      n /= 2;
    } else {
      n = n * 3 + 1
    }
    console.log(n)
  }

//3. Chico tem 1,50 metro e cresce 2 centímetros por ano, enquanto Zé tem 1,10 metro e cresce 3
//centímetros por ano. Construa um algoritmo que calcule e imprima as alturas de Chico e Zé até que
//Zé seja maior que Chico

let chico = 1.50;
let ze = 1.10;

while  (chico > ze) {
    chico += 0.02;
    ze += 0.03;
    console.log(`Altura do Chico = ${chico.toFixed(2)}   Altura do Ze = ${ze.toFixed(2)}`)
}