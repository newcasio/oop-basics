//create class template
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getInfo() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  getAge() {
    let year = new Date().getFullYear();
    return `${this.title} is ${year - this.year} years old`;
  }
  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  test() {
    return "#2 Bookshop";
  }
  //create a static method that returns standard response.  Must run using the class name not the instance, see below
  static bookStore() {
    return "#1 Bookshop";
  }
}

//create an object instance
const book1 = new Book("Book1", "Brad", "2019");

// console.log(book1.getInfo());
// console.log(book1.getAge());

console.log(Book.bookStore());
console.log(book1.test());
