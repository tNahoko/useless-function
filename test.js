const { expect } = require("chai");
const { coffeeParse } = require("./coffeeParse.js");

describe("returns a right number of cups of coffee!", () => {
  it("should work!", () => {
    expect(coffeeParse(3)).to.equal("☕️☕️☕️");
  });
});