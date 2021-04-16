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
        return true;
    } else {
        return false;
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
    content.innerHTML = `<span>Title:</span> ${ucFirst(myLibrary[i].title)} <br><br><span>Author:</span> ${ucFirst(myLibrary[i].author)} <br><br><span>No. of Pages:</span> ${myLibrary[i].pages} <br><br> <span>Status:</span> <span class="status">${read()} <span> <br><br>`;
    container.appendChild(content);
    let readbutton = document.createElement('button');
    readbutton.classList.add("editbutton");
    readbutton.innerHTML = "Read"
    content.appendChild(readbutton);
    let removebutton = document.createElement('button')
    removebutton.classList.add("removebutton");
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
        } else if (button.textContent === "Read") {
            const span1 = event.target.parentNode.querySelector(".status")
            if (span1.textContent == "Not read") {
                span1.innerHTML = "Read<br><br>";
            } else {
                span1.innerHTML = "Not read<br><br>";
            }
        }
    }
})
//read button maken
function read() {
    if (myLibrary[i].read === true) {
        return "Read"
    } else {
        return "Not read"
    }
}