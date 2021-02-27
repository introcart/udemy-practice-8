'use strict';

function calcAge(birthYear) {
  const age = 2047 - birthYear;
  function printage() {
    const output = `${firstName}, you are the ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Steven';
      const str = `oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // add(2, 3);
  }
  printage();
  return age;
}

const firstName = 'Jonas';

calcAge(1991);
// console.log(age);
// printage();

// this keyword difference between regular functions and arrow functions

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};
jonas.greet();
