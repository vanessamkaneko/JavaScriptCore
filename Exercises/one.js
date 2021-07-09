/* 

    Buscando e contando dados em Arrays

    Baseado no Array de livros por Categoria abaixo, faça os seguintes desafios
    A) - Contar o número de livro em cada categoria 
    B) - Contar o número de autores 
    C) - Mostrar livros do autor Augusto Cury
    D) - Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
*/


const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

//Letra A)
/*for(let i = 0; i < booksByCategory.length; i++){
    console.log(booksByCategory[i].category);
    console.log(booksByCategory[i].books.length);
}

booksByCategory.length = 2
i = 0
print riqueza
print 3

i = 1
print Inteligência Emocional
print 3

i = 2

console.log(totalCategories);

for(let category of booksByCategory) {
    console.log('Total de livros da categoria:', category.category)
    console.log(category.books.length)
}*/


//Letra B
/**
 * 
 * const authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) === -1) {
                authors.push(book.author)
            } 
        }
    }

    console.log(authors.length);
 */

//Letra C

/**
 * 
 * const augustoCuryBooks = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === 'Augusto Cury') {
                augustoCuryBooks.push(book.title)
            }
        }
    }

    console.log(augustoCuryBooks);
 * 
 */

// Letra D
/**
 * 
 * const findBooksByAuthor = (nameAuthor) => {

        const books = [];
        for(let category of booksByCategory) {
            for(let book of category.books) {
                if(book.author === nameAuthor) {
                    books.push(book.title);
                }
            }
        }

        return books;
    }

    const books = findBooksByAuthor("Robert T. Kiyosaki e Sharon L. Lechter");
    console.log(books);
 * 
 */


















































/*const totalCategories = booksByCategory.length
console.log(totalCategories);

for(let category of booksByCategory) {
    console.log('Total de livros da categoria:', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }  //o authors começa vazio, então irei verificar se dentro desse array tem algum elemento que tenha o nome do autor - se o nome do autor estiver no array, não faço nada, se não estiver dentro do array, irei adicioná - lo | se o indexOf me retonar uma posição do array, indica que o autor está lá dentro, se me retornar como -1, é porque não está lá dentro
        }
    }
    
    console.log("Total de autores:", authors.length)
}

countAuthors();

/* function booksOfAugustoCury() {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books){
            if(book.author === 'Augusto Cury') {
                books.push(book.title)
            } 
        }
    }
    
    console.log("Livros do autor:", books)
}

booksOfAugustoCury() 

// - Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books){
            if(book.author === author) {
                books.push(book.title)
            } 
        }
    }
    
    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury')
booksOfAuthor('George S. Clason')*/
