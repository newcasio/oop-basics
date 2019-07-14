//create a constructor which is like a template
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getInfo = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

//create a new Magazine constructor which will inherit the properties of Books, but no access to prototype methods (would have access if method was still in constructor)
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

//to get access to prototype methods
Magazine.prototype = Object.create(Book.prototype);

//creat an instane of a magazine
const mag1 = new Magazine("Mag1", "Joe", "2019", "July");

//set constructor to magazine instead of book
Magazine.prototype.constructor = Magazine;

// console.log(mag1.getInfo());
console.log(mag1.__proto__.constructor);
