// const coffee = coffeeparse(3); // ☕️☕️☕️
function coffeeParse(num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += "☕️";
  }
  return result;
}

module.exports = { coffeeParse };