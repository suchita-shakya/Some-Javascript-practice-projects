//Book class
class Book{
    constructor(title, author){
        this.title =title;
        this.author = author;
    }
}

//UI class: handles ui tasks
class UI{
    static displayBooks(){
        const StoredBooks =[
            {
                title:"Muna Madan",
                author:"Laxmi Prasad Devkota"
            },
            {
                title:"Maha vitra ko ma",
                author:"Madan Krishna Shrestha"
            }
        ];
        const books = StoredBooks;
        books.forEach((book)=> UI.addBookToList());
    }
    static addBookToList(book){
        const list = document.getElementById("booklist");

        const row = document.createElement("tr");

        row.innerHTML = 
        `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><a href="#">Close</a></td>
        `;

        list.appendChild(row);
    }
}

//event management:dispplay books
document.addEventListener("DOMContentLoaded", UI.displayBooks);
