
document.getElementById('submitButton').addEventListener('click', function(event){
    event.preventDefault();
    handleFormData();
} );

function showForm()
{
    var popup = document.getElementById("popup");
    popup.style.display = "block";

}

function hideForm() 
{
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function handleFormData()
{
    var bookName = document.getElementById("bookName").value;
    var authorName = document.getElementById("authorName").value;
    var pageNumber = document.getElementById("numberOfPages").value;
    var radioChecked = document.querySelector('input[name="yes_no"]:checked');
    var readTheBookOrNot = radioChecked ? radioChecked.value : "Not Specified";
    
    var newBook = new Book(bookName, authorName, pageNumber, readTheBookOrNot);
    books.push(newBook);
    createBookElement(newBook);
    hideForm();
}

function createBookElement(book)
{
    
    var bookContainer = document.createElement("div");
    bookContainer.classList.add("book");

    var detailsContainer = document.createElement("div");
    detailsContainer.classList.add("book-details");

    var titleParagraph = document.createElement("p");
    titleParagraph.classList.add("title");
    titleParagraph.textContent = book.name;

    var authorParagraph = document.createElement("p");
    authorParagraph.classList.add("author");
    authorParagraph.textContent = book.author;

    var pageParagraph = document.createElement("p");
    pageParagraph.classList.add("pages");
    pageParagraph.textContent = book.page;

    detailsContainer.appendChild(titleParagraph);
    detailsContainer.appendChild(authorParagraph);
    detailsContainer.appendChild(pageParagraph);

    var btnContainer = document.createElement("div");
    btnContainer.classList.add("book-btn");

    var readButton = document.createElement("button");
    readButton.textContent = "Read";

    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    btnContainer.appendChild(readButton);
    btnContainer.appendChild(removeButton);

    bookContainer.appendChild(detailsContainer);
    bookContainer.appendChild(btnContainer);

    document.querySelector('.book-template-grid').appendChild(bookContainer);

}

var books = [];

function Book(name,author,page,readStatus)
{
    this.name = name;
    this.author = author;
    this.page = page;
    this.readStatus = readStatus;
}
