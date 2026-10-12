// Previous Book Exercise
/*
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    const status = this.read ? "already read" : "not read yet"
    return `${this.title} by ${this.author}, ${this.pages} pages, ${status}`
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)

console.log(theHobbit.info())
*/

// Current Library Project
const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = crypto.randomUUID()
}

Book.prototype.toggleRead = function() {
    this.read = !this.read
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
}

addBookToLibrary("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, false)
addBookToLibrary("Holes", "Louis Sachar", 233, true)
addBookToLibrary("Twilight", "Stephenie Meyer", 498, false)

function display() {
    const displayElement = document.querySelector("#display")
    displayElement.replaceChildren()

    for (const element of myLibrary) {
        const card = document.createElement("div")
        const status = element.read ? "already read" : "not read yet"
        card.textContent = `${element.title} by ${element.author}, ${element.pages} pages, ${status}`

        const remove = document.createElement('button')
        remove.textContent = 'Remove'
        remove.dataset.id = element.id

        const readButton = document.createElement('button')
        readButton.textContent = element.read ? 'Mark as unread' : 'Mark as read'
        readButton.dataset.id = element.id
        
        displayElement.appendChild(card)
        displayElement.appendChild(remove)
        displayElement.appendChild(readButton)

        remove.addEventListener('click', () => {
            const bookId = remove.dataset.id
            const index = myLibrary.findIndex(book => book.id === bookId)

            myLibrary.splice(index, 1)
            display()
        })

        readButton.addEventListener('click', () => {
            const bookId = readButton.dataset.id
            const index = myLibrary.findIndex(book => book.id === bookId)
            myLibrary[index].toggleRead()
            display()
        })
    }
}
display()

const openDialog = document.querySelector('#openDialog')
const myDialog = document.querySelector('#myDialog')
const closeDialog = document.querySelector('#closeDialog')

openDialog.addEventListener('click', () => {
    myDialog.showModal()
})

closeDialog.addEventListener('click', () => {
    myDialog.close()
})

const inputTitle = document.querySelector('#title')
const inputAuthor = document.querySelector('#author')
const inputPages = document.querySelector('#pages')
const inputRead = document.querySelector('#read')
const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()

    addBookToLibrary(inputTitle.value, inputAuthor.value, Number(inputPages.value), inputRead.checked)
    display()
    myDialog.close()
    form.reset()
})