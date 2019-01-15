class Book {
  constructor (name) {
    this.name = name
  }

  print () {
    console.log(`Book's Name is : ${this.name}`)
  }
}

module.exports = Book
