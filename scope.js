// global vs function scope

/* const a = 2 */
/*  */
/* function test() { */
/*   const b = 3 */
/*   console.log("first console.log: ", a, b) // 2 3 global scope */
/* } */
/*  */
/* test() */
/* console.log("second console.log: ", a, b) // error b undefined */

// block scope

function test2() {
  let x = 2
  if (true) {
    let y = 3
    console.log("first console.log: ", x, y) // 2 3 block scope
  }

  console.log("second console.log: ", x, y) // y undefined bc block scope
}
test2()

// function scope with var

function test3() {
  var x = 2
  if (true) {
    var y = 3
    console.log("first console.log: ", x, y) // 2 3
  }

  console.log("second console.log: ", x, y) // 2 3 bc var is function scope but this would throw error with let and const bc they are block scope
}
test3()
