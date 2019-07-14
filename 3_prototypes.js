//create a constructor which is like a template
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//create prototype, move method from constructor to prototype
//store method in prototype instead of constructor, as we want title, author and year for every book, but may not want access to method in each book instance
Book.prototype.getInfo = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

Book.prototype.getAge = function() {
  let year = new Date().getFullYear();
  return `${this.title} is ${year - this.year} years old`;
};

Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
};

//create an instance of the template/class
const book1 = new Book("Book1", "Brad", "1992");
const book2 = new Book("Book2", "Bradley", "2992");

// console.log(book1.__proto__);
// console.log(book1.getInfo());
// console.log(book1.getAge());

book1.revise("2020");
console.log(book1);
