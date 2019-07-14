class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getInfo() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year); //bring these properties in from the Book constructor
    this.month = month; //add this to the book properties
  }
}

const mag1 = new Magazine("mage1", "Joe", "2013", "jan");

console.log(mag1);

console.log(mag1.getInfo());
