class BookCoverDecorator {
  constructor (book) {
    this.book = book
    this.name = book.name
    this.cover = 'Marvel Cover'
  }

  print () {
    console.log(`Book : "${this.name}" is Decorated with a ${this.cover}`)
  }
}

module.exports = BookCoverDecorator
