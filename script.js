let myLibrary = [];

//Krijg het niet voor elkaar om het vanuit object constructor naar array te krijgen.
// function book() {
//     this.title = document.getElementById("title").value;
//     this.author = document.getElementById("author").value;
//     this.pages = document.getElementById("pages").value;
//     this.read = bookRead();
// }
const addButton = document.getElementById('btn');
addButton.addEventListener("click", addToLibrary)

function addToLibrary() {
    let book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        pages: document.getElementById("pages").value,
        read: bookRead()
    };
    myLibrary.push(book);
    document.querySelectorAll("form").reset;
}

function bookRead() {
    if (document.getElementById("read").checked) {
        return true;
    } else {
        return false
    }
}
