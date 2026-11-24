// Crie um algoritmo que vai receber um número e vai retornar ao usuário se o número digitado pelo usuário é um número primo.

// Números primos:
// Definição: Só pode ser dividido por 1 e por ele próprio. 
// Se houver qualquer outro divisor exato, ele deixa de ser primo e passa a ser chamado de número composto.
// O caso do número 1: O número 1 não é primo, pois tem apenas um divisor (ele mesmo).
// O único par: O número 2 é o único número primo par. Todos os outros números pares são divisíveis por 2 e, portanto, não são primos.
// Infinitidade: A sequência dos números primos é infinita. Os primeiros exemplos são: 2, 3, 5, 7, 11, 13, 17, 19, 23...

let numero = +prompt('Digite um número');
let primo = true;

if (numero <= 1) {
    primo = false;
}

for (let divisor = 2; divisor < numero; divisor = divisor + 1) {
    if (numero % divisor === 0) {
        primo = false;
        break;
    }
}

if (primo) {
    console.log('É um número primo!');
} else {
    console.log('Não é um número primo!');
}
