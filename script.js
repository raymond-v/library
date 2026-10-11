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