let nome 
let idade
console.log(typeof nome)
console.log(typeof idade)
//por que não foi atribuido valor as variaveis

 nome =(prompt('Qual seu nome?'))
idade =Number(prompt('Qual sua idade?'))

console.log(typeof nome)
console.log(typeof idade)

console.log("Olá pessoal, meu nome é", nome, 'e eu tenho', idade, 'anos')
  //mais formas de mostrar as variaveis
/*console.log(`Olá ${nome} você tem  ${idade}`)
console.log("Olá pessoal, meu nome é " + nome + " Eu tenho " + idade)*/


let meias =('Você usa meias?')
let sapato =('Gosta de sapatos?')
let comida =('Você sabe fazer lasanha?')

let resposta1 =prompt(meias)
let resposta2 =prompt(sapato)
let resposta3 =prompt(comida)

//console.log(resposta1, resposta2, resposta3)
console.log('Você usa meias?', resposta1,
 'Gosta de sapatos?', resposta2, 
 'Você sabe fazer lasanha?', resposta3)
