
document.getElementById('submitButton').addEventListener('click', function(event){
    event.preventDefault();
    handleFormData();
    hideForm();
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
    books.push(new Book (bookName,authorName,pageNumber,readTheBookOrNot));
    console.log(books[books.length - 1]);
}

var books = [];

function Book(name,author,page,readStatus)
{
    this.name = name;
    this.author = author;
    this.page = page;
    this.readStatus = readStatus;
}
