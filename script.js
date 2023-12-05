
document.getElementById('submitButton').addEventListener('click', function(event){
    event.preventDefault();
    handleFormData();
} )

function showForm()
{
    var popup = document.getElementById("popup");
    popup.style.display = "block";

}

function handleFormData()
{
    var bookName = document.getElementById("bookName").value;
    var authorName = document.getElementById("authorName").value;
    var pageNumber = document.getElementById("numberOfPages").value;
    var readTheBookOrNot = document.querySelector('input[name="yes_no"]:checked').value;

    console.log("The name of the book : "+bookName);
    console.log("The name of the author : "+authorName);
    console.log("Number of pages : "+pageNumber);
    console.log("Read the book or not : "+readTheBookOrNot);
}
