let nomeCompleto =prompt('Seu nome completo:')
let dataDeNascimento =prompt('Data de Nascimento')
let endereco =prompt('Endereço')
let cpf =prompt('Digite seu CPF')
let escolaridade =prompt('Escolaridade')
let cnh =confirm('Possui CNH?')
let filhos =Number(prompt('Quantos filhos voçê tem?'))
let cargoAtual =prompt('Qual seu trabalho atual ')
let salario =prompt('Qual seu salario atual ')
let comissao =prompt('Recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero')
let admissao =prompt('Informe o ano de admissão')

console.log(typeof nomeCompleto, typeof dataDeNascimento, 
    typeof endereco, typeof cpf, typeof escolaridade, 
    typeof cnh, typeof filhos, typeof cargoAtual,  
    typeof comissao, typeof admissao)

    //imprimir na tela
console.log(`NomeCompleto: ${nomeCompleto} 
DataDeNascimento: ${dataDeNascimento}
Endereço: ${endereco}
Cpf: ${cpf}
Escolaridade: ${escolaridade}
CNH: ${cnh}
Filhos: ${filhos}
CargoAtual: ${cargoAtual}
Salário: ${salario}
Comissão: ${comissao}
Admissão: ${admissao}`)