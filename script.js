'use strict';

function calcAge(birthYear) {
  const age = 2047 - birthYear;
  function printage() {
    const output = `${firstName}, you are the ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
    // console.log(str);
    console.log(millenial);
  }
  printage();
  return age;
}

const firstName = 'Jonas';

calcAge(1991);
// console.log(age);
// printage();
