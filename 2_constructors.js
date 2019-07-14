//constructor

//create a constructor which is a template
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getInfo = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

//create an instance of the template/class
const book1 = new Book("Book1", "Brad", "1992");
const book2 = new Book("Book2", "Bradley", "2992");

console.log(book1.getInfo());
