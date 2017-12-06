/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [ 1,2,3,4,5 ] 

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArray ( arr ) {
  return arr
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(returnArray( [1,2,3,4,5] )[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/

function numberArray ( arr, num ) {
  return arr[num]
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var array = [ 'string', {}, [], false , 12 ]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

numberArray(0)
numberArray(1)
numberArray(2)
numberArray(3)
numberArray(4)

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book ( livro ) {
    var objeto = {
      livro01: {
        quantidadePaginas: 233,
        autor: 'Eduardo vasconcelos',
        editora: 'novatec'
      },
      livro02: {
        quantidadePaginas: 222,
        autor: 'junior BP',
        editora: 'Aurora'
      },
      livro03: {
        quantidadePaginas: 465,
        autor: 'Barbosa Souza',
        editora: 'Casa do Código'
      }
      
    }
    
    if ( !livro ) {
      return objeto
    }
    
    return objeto[livro]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

"O livro01 tem" + book('livro01').quantidadePaginas + "páginas!"


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

"O autor do livro livro02 é" + book('livro02').quantidadePaginas + "."


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

"O livro livro03 foi publicado pela editora" + book('livro03').editora + "."

