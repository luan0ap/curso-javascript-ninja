(function () {
  /*
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */

  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  // ?
  console.log( 'Propriedades de "person":' );

  var person = {
    name: 'Luan',
    lastname: 'AP',
    age: 17
  }

  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  
  console.log(Array(person))
  
  /*
  Crie um array vazio chamado `books`.
  */
  
  var books = []
  
  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  // ?
  console.log( '\nLista de livros:' );
  books.push({
    name: 'nameOne',
    pages: 123
  })
  
  books.push({
    name: 'nameTwo',
    pages: 44
  })
  
  books.push({
    name: 'nameThree',
    pages: 543
  })

  /*
  Mostre no console todos os livros.
  */
  
  console.log(books)
  
  console.log( '\nLivro que está sendo removido:' );
  /*
  Remova o último livro, e mostre-o no console.
  */
  books.pop()
  console.log( '\nAgora sobraram somente os livros:' );
  console.log(books)
  /*
  Mostre no console os livros restantes.
  */
  
  console.log(books)

  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  // ?
  console.log( '\nLivros em formato string:' );
  var stringfied = []
  for ( var i = 0; i < books.length; i++ ) {
    stringfied.push(JSON.stringify(books[i]))
  }
  
  console.log(stringfied)

  /*
  Mostre os livros nesse formato no console:
  */
  // ?
  
  console.log(stringfied)
  
  /*
  Converta os livros novamente para objeto.
  */
  // ?
  console.log( '\nAgora os livros são objetos novamente:' );
  
  var parsed = []
  for ( var i = 0; i < stringfied.length; i++ ) {
    parsed.push(JSON.parse(stringfied[i]))
  }
  
  console.log(parsed)

  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  
  console.log(JSON.stringify(books))
  
  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  // ?
  console.log( '\nMeu nome é:' );
  
  var myName = [ 'L', 'u', 'a', 'n' ]

  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log( '\nMeu nome invertido é:' );
  
  var hi = ''
  for ( var i in  myName ) {
    hi += myName[i]
  }
  
  console.log(hi)
  
  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  // ?

  console.log( '\nAgora em ordem alfabética:' );
  console.log( hi.reverse() )
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log(myName.sort())
})()
