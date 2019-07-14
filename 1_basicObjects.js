const book1 = {
  title: "Book1",
  author: "Brad",
  year: "1998",
  getInfo: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

const book2 = {
  title: "Book2",
  author: "Bradley",
  year: "2013",
  getInfo: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

//NOTE: for methods use 'function()' NOT arrow functions.

//run method of object
// console.log(book1.getInfo());

//get ONLY VALUES of an object
// console.log(Object.values(book1));

//get ONLY KEYS of an object
// console.log(Object.keys(book1));
