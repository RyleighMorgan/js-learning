// To define a variable we use the var or let keyword

// this defines a string variable
var string001 = "hello, i like tea";
console.debug('\n\n--- STRINGS ---')
console.log(string001);

// this defines a number variable
console.debug('\n\n--- NUMBERS ---')

var numer74 = 409;
console.log(numer74);

// this defines an array variable
console.debug('\n\n--- ARRAYS ---')

var array90 = ['javascript', 'html', 'css', 'c++', 'python', 47];
console.log(array90);
console.log(array90[2]);

// this defines an object
console.debug('\n\n--- OBJECTS ---')

var oject53 = {
  description: string001,
  integer: numer74,
  code_language: array90
};
console.log(oject53);
console.log(oject53.integer);
console.log(oject53.code_language);
console.log(oject53.code_language[3]);