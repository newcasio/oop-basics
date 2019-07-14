//object of prototypes

const bookProtos = {
  getInfo: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function() {
    let year = new Date().getFullYear();
    return `${this.title} is ${year - this.year} years old`;
  },
  revise: function(newYear) {
    this.year = newYear;
    this.revised = true;
  }
};

// create object
const book1 = Object.create(bookProtos);
//add properties to object
book1.title = "Book1";
book1.author = "Jacky Chan";
book1.year = "2014";

console.log(book1);
