const Book = require('./Book')
const BookCoverDecorator = require('./BookCoverDecorator')

const b1 = new Book('Attitude is Everything')
const decoratedB1 = new BookCoverDecorator(b1)

b1.print()
decoratedB1.print()
