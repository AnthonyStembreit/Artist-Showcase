const Band = require("../constructors/Band");

test("Can set members account via constructor", () => {
  const testValue = "Peter, Paul, Mary";
  const newBand = new Band("The Band", "Hippie", 1964, 2, testValue);
  expect(newBand.members).toBe(testValue);
});

test("getType() should return \"Band\"", () => {
  const testValue = "Band";
  const newBand = new Band("The Band", "Hippie", 1964, 2, "Peter, Paul, Mary");
  expect(newBand.getType()).toBe(testValue);
});

test("Can get list of band members via getMembers()", () => {
  const testValue = "Peter, Paul, Mary"
  const newBand = new Band("The Band", "Hippie", 1964, 2, "Peter, Paul, Mary");
  expect(newBand.getMembers()).toBe(testValue);
});