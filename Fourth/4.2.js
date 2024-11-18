class Book {
    constructor(title, author, isbn) {
        this.title = title;         //Название книги
        this.author = author;       //Автор книги
        this.isbn = isbn;           //ISBN книги
        this.status = "доступна";   //Статус книги: "доступна" или "взята"
    }
}

class Library {
    constructor() {
        this.books = []; 
    }

    addBook(book) {                                                                                    //Метод для добавления книги в библиотеку
        this.books.push(book);
        console.log(`Книга "${book.title}" добавлена в библиотеку.`);                                  //В выводе используем тильды, тк только с ними возмножно простое добавление значения объекта без объединения как в случаях ""
    }

    borrowBook(isbn) {                                                                                 //Метод для взятия книги по ISBN
        const book = this.books.find(b => b.isbn === isbn);                                            //С помощью стрелочной функции по переменной b(элемента массива) ищем книгу по ISBN
        if (!book) {
            console.log(`Книга с ISBN "${isbn}" не найдена.`);
            return;
        }
        if (book.status === "взята") {
            console.log(`Книга  "${book.title}" уже взята.`);
        } else {
            book.status = "взята";
            console.log(`Книга "${book.title}" успешно взята.`);
        }
    }

    returnBook(isbn) {                                                                                //Метод для возврата книги по ISBN
        const book = this.books.find(b => b.isbn === isbn);                                           //С помощью стрелочной функции по переменной b(элемента массива) возвращаем книгу по ISBN
        if (!book) {
            console.log(`Книга с ISBN "${isbn}" не найдена.`);
            return;
        }
        if (book.status === "доступна") {
            console.log(`Книга "${book.title}" уже находится в библиотеке.`);
        } else {
            book.status = "доступна";
            console.log(`Книга "${book.title}" успешно возвращена.`);
        }
    }

    listAvailableBooks() {                                                                            //Метод для отображения списка доступных книг
        const availableBooks = this.books.filter(b => b.status === "доступна");                       //С помощью стрелочной функции по переменной b(элемента массива) показываем список доступных книг
        if (availableBooks.length === 0) {
            console.log("Нет доступных книг.");
        } else {
            console.log("Доступные книги:");
            availableBooks.forEach(b => console.log(`- "${b.title}" автор: ${b.author}`));
        }
    }
}


const library = new Library();                                                       //Наш экземпляр для начала работы 


//Примеры работы библиотеки 


const book1 = new Book("Властелин мира", "А.Р. Беляев", "123456789");                //Создание книги
const book2 = new Book("Метро 2034", "Д.А. Глуховский", "987654321");
const book3 = new Book("О духовном в искусстве", "В.В. Кандинский", "111222333444");
const book4 = new Book("Мастер и Маргарита", "М.А. Булгаков", "88005553535");

library.addBook(book1);                                                              //Добавление книги в библиотеку
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
console.log();

library.listAvailableBooks();                                                        //Список доступных книг
console.log();

library.borrowBook("123456789");                                                     //Взятие книги
library.borrowBook("88005553535");
console.log();

library.borrowBook("12345678");                                                      //Попытка взять книгу, с несуществующим ISBN
library.borrowBook("880055535"); 
console.log();

library.borrowBook("123456789");                                                     //Попытка взять книгу, которая уже взята
library.borrowBook("88005553535")
console.log();

library.listAvailableBooks();                                                        
console.log();

library.returnBook("123456789");                                                     //Возврат книги
console.log();

library.returnBook("123456789");                                                     //Попытка вернуть книгу, которая уже в библиотеке
console.log();

library.borrowBook("987654321"); 
console.log();

library.listAvailableBooks();        