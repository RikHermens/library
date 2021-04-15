let myLibrary = [];
let i = 0;
const container = document.querySelector(".container");

//Krijg het niet voor elkaar om het vanuit object constructor naar array te krijgen.
// function book() {
//     this.title = document.getElementById("title").value;
//     this.author = document.getElementById("author").value;
//     this.pages = document.getElementById("pages").value;
//     this.read = bookRead();
// }
const addButton = document.getElementById('btn');
addButton.addEventListener("click", addToLibrary);

function addToLibrary() {
    let book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        pages: document.getElementById("pages").value,
        read: bookRead()
    };
    myLibrary.push(book);
    document.querySelector("form").reset();
    displayBooks();
}

function bookRead() {
    if (document.getElementById("read").checked) {
        return "true";
    } else {
        return "false"
    }
}

//Functie voegt eerder toegevoegde boeken ook al toe
// function displayBooks() {
//     for (i = 0; i < myLibrary.length; i++) {
//         //create div met mylibrary[i]
//         let content = document.createElement('div');
//         content.classList.add("content");
//         content.textContent = `${myLibrary[i].title} + ${myLibrary[i].author} + ${myLibrary[i].pages} + ${myLibrary[i].read}`;
//         container.appendChild(content);
//     }
// }

//Werkt, maar wat als array veranderd?
function displayBooks() {

    let content = document.createElement('div');
    content.classList.add("content");
    content.textContent = `${myLibrary[i].title} + ${myLibrary[i].author} + ${myLibrary[i].pages} + ${myLibrary[i].read}`;
    container.appendChild(content);
    i += 1;
}
