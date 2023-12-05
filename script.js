function Book(name, author, page, readStatus) 
{
  this.name = name;
  this.author = author;
  this.page = page;
  this.readStatus = readStatus;
}

var books = [];


document.getElementById("submitButton").addEventListener("click", function (event) 
{
    event.preventDefault();
    handleFormData();
});

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
    document.getElementById("bookName").value="";
    document.getElementById("authorName").value="";
    document.getElementById("numberOfPages").value="";
    var radioButtons = document.querySelectorAll('input[name="yes_no"]');
    radioButtons.forEach(function(radioButton){
        radioButton.checked = false;
    });
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
    readButton.classList.add("read-btn");
    if(book.readStatus === "Yes")
    {
        readButton.textContent = "Read";
        readButton.style.backgroundColor = "#ABF94D";
    }

    else
    {
        readButton.textContent = "Not Read";
        readButton.style.backgroundColor = "#F08080";
    }

    readButton.addEventListener("click", function(){
        changeReadStatus(readButton);
    });

    var removeButton = document.createElement("button");
    removeButton.classList.add("remove-btn");
    removeButton.textContent = "Remove";
    btnContainer.appendChild(readButton);
    btnContainer.appendChild(removeButton);

    bookContainer.appendChild(detailsContainer);
    bookContainer.appendChild(btnContainer);

    document.querySelector(".book-template-grid").appendChild(bookContainer);
}

function changeReadStatus(button)
{
    if (button.textContent === "Read")
    {
        button.textContent = "Not Read";
        button.style.backgroundColor = "#F08080";
    }

    else
    {
        button.textContent = "Read";
        button.style.backgroundColor = "#ABF94D";
    }
}