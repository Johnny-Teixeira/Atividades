//Crie uma lista com alguns valores e imprima:
//Os valores positivos
//A média de todos os valores

let lista = [15, 12, -52, 10, 3];

console.log(lista);

for (const positivos of lista){
    if (positivos > 0){
        console.log(positivos);
    }
}
console.log('comprimento da lista = ' + lista.length)
soma = 0

for (const somar of lista){
    soma += somar;
}

const media = soma / lista.length
console.log(`a média da lista é de ${media}`)

//*****************************

//Crie uma lista com 15 pessoas lendo seu nome e cor.
//As cores podem ser “branco”, “negro”, “pardo” e “outro”
//Em seguida, mostre quantas pessoas tem cada cor
//Tente resolver esse problema sem usar uma cadeia de “ifs” ou switch

let pessoas = [
    { nome: "Pessoa1", cor: 'branco' }, 
    { nome: "Pessoa2", cor: 'negro' }, 
    { nome: "Pessoa3", cor: 'outro' }, 
    { nome: "Pessoa4", cor: 'branco' }, 
    { nome: "Pessoa5", cor: 'negro' }, 
    { nome: "Pessoa6", cor: 'outro' }, 
    { nome: "Pessoa7", cor: 'branco' }, 
    { nome: "Pessoa8", cor: 'negro' }, 
    { nome: "Pessoa9", cor: 'pardo' }, 
    { nome: "Pessoa10", cor: 'branco' }, 
    { nome: "Pessoa11", cor: 'negro' }, 
    { nome: "Pessoa12", cor: 'outro' }, 
    { nome: "Pessoa13", cor: 'branco' }, 
    { nome: "Pessoa14", cor: 'negro' }, 
    { nome: "Pessoa15", cor: 'pardo' }, 
    ];
    


console.log(pessoas); 

const contagem = [];



for (let pessoa of pessoas){
    if (!contagem[pessoa.cor]){
        contagem[pessoa.cor]=1;
    } 
    else {
        contagem[pessoa.cor]++;
    }
}
console.log('numero de pessoas de cada cor')
console.log(contagem)










//3. Crie o jogo de adivinhar um número de 1 até 100.
//Caso ele entre um número maior escreva “Maior”
//Caso ele entre um número menor escreva “Menor”
//Caso ele entre com um número fora do intervalo ( 0 ou maior que 100) fale “desistiu?“ e acabe o jogo
//O jogo deve perguntar até o usuário desistir ou falar o valor correto.

// random value generated

const y = Math.floor(Math.random() * 100 + 1);
    
const x = prompt('Digite um numero')



if (x == y){
        console.log(`vc escolheu ${x} e saiu o numero ${y}, Parabéns vc venceu`)
    } else if (x < 0 || x > 100){
        console.log('Desistiu?')
    } else if(x > y){    
        console.log(`vc escolheu ${x} e saiu o numero ${y}, não foi dessa vez, que tal um número menor?`);
    } else if (x < y){
        console.log(`vc escolheu ${x} e saiu o numero ${y}, não foi dessa vez, que tal um número maior?`)
    } 




