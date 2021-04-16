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
    if (book.title === "" || book.author === "" || book.pages === "") {
        alert("Please fill in all forms");
        return;
    } else {
        myLibrary.push(book);
        document.querySelector("form").reset();
        displayBooks();
    }
}

function bookRead() {
    if (document.getElementById("read").checked) {
        return "<span>Status:</span> Read";
    } else {
        return "<span>Status:</span> Not yet read"
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

function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//voegt boek toe welke op beeld komt
function displayBooks() {
    i = myLibrary.length - 1;
    console.log(myLibrary)
    let content = document.createElement('div');
    content.classList.add("content");
    content.setAttribute("id", i);
    content.innerHTML = `<span>Title:</span> ${ucFirst(myLibrary[i].title)} <br><br><span>Author:</span> ${ucFirst(myLibrary[i].author)} <br><br><span>No. of Pages</span> ${myLibrary[i].pages} <br><br> ${myLibrary[i].read}<br><br>`;
    container.appendChild(content);
    let removebutton = document.createElement('button')
    removebutton.classList.add("removebutton");
    removebutton.setAttribute("id", i)
    removebutton.innerHTML = "Remove";
    content.appendChild(removebutton);
}

//remove button maken 
//checken waarom dit werkt: https://www.youtube.com/watch?v=MGstKhPoiho
container.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const button = event.target;
        const content = button.parentNode;
        const container = content.parentNode;
        if (button.textContent === "Remove") {
            container.removeChild(content);
        }
    }
}
)
//read button maken