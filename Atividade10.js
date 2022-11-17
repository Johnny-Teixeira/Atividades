// 1. Crie um timer que imprima o texto “PUCPR” a cada meio segundo. Pare o timer após 5 execuções.
setTimeout(() => {
   console.log('PUCPR')
   setTimeout(() => {
     console.log('PUCPR')
     setTimeout(() => {
       console.log('PUCPR')
       setTimeout(() => {
         console.log('PUCPR');
         setTimeout(() => {
           console.log('PUCPR');
         }, 1000);
       }, 1000);
     }, 1000);
   }, 1000);
 }, 1000);

/*2. Crie um timer que mostre no console a palavra “Pontifícia
Universidade”. Ele deve disparar um segundo timer, que mostre no
console o texto “Católica do”. Repita para um terceiro timer que mostre
o texto “Paraná”.*/

setTimeout(() => {
    console.log("Pontificia Universidade")
    setTimeout(() => {
       console.log("Católica do")
       setTimeout(() => console.log("Paraná"), 2000);
    }, 500);
 }, 1000);

 

 
/*3. Crie 3 timers A (0.5s), B (0.2s) e C (0.8s). Os timers devem produzir os
valores a=5, b=10 e c=2, respectivamente. Ao final dos 3 timers, deve ser
calculada a expressão: a + b * c. O programa deve continuar funcionando
mesmo se alterarmos os tempos dos timers entre uma execução e outra.*/

const delayedPrint = (text, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(text);
            resolve();
        }, delay)
    })
}
delayedPrint('Pontifícia Universidade', 1000)
    .then(() => delayedPrint('Católica do', 1000))
    .then(() => delayedPrint('Paraná', 1000));

let a = 0;
let b = 0;
let c = 0;
let contador = 0;

function realizaCalculo() {
    contador = contador + 1;
    if (contador === 3) {
        console.log(a + b * c);
    }
}

setTimeout(() => {
    a = 5;
    realizaCalculo();
}, 500);
setTimeout(() => {
    b = 10;
    realizaCalculo();
}, 200);
setTimeout(() => {
    c = 2;
    realizaCalculo();
}, 800);

/*4. Escreva uma função testNum que receba um número como um argumento e
retorne um Promise que resolve em caso o número seja maior que dez, ou
rejeite caso contrário. Use-o exibindo uma mensagem em cada caso.*/

function testNum(num) {
    return new Promise((resolve, reject) => {
       if (num > 10) {
          resolve(num);
       }  else {
          reject(num);
       }      
    });
 }
 
 testNum(10)
    .then(v => console.log(`Numero é maior que 10: ${v}`))
    .catch(v => console.log(`Numero não é maior que 10: ${v}`))


    /*5. Escreva duas funções puras que retornem Promises:
• A primeira, makeAllCaps(), receberá um array de palavras e tornará todas maiúsculas. Ela
rejeitará caso o array contenha um dado que não seja string.
• A segunda, sortWords(), ordenará as palavras em ordem alfabética.
• Em seguida, teste-as*/

    function makeAllCaps(words) {
   return new Promise((resolve, reject) => {
      const result = [];
      for (let word of words) {
         if (typeof word !== 'string') {
            reject(word);
            return;
         }
         result.push(word.toUpperCase());
      }
      resolve(result);
   });
}   

function sortWords(words) {
   return new Promise((resolve, reject) => {
      resolve([...words].sort());
   });
}

makeAllCaps(["batata", "acerola", "melão"])
   .then(sortWords)
   .then(console.log)
   .catch(v => console.log("Não é um texto: " + v));

