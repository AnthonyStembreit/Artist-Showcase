const Musician = require("../constructors/Musician");

test("Can instantiate Musician instance", () => {
  const newMusician = new Musician();
  expect(typeof(newMusician)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const newMusician = new Musician(name);
  expect(newMusician.name).toBe(name);
});
test("Can set genre via constructor arguments", () => {
    const genre = "Rock";
    const newMusician = new Musician("Alice", genre);
    expect(newMusician.genre).toBe(genre);
  });

test("Can set yearCreated via constructor argument", () => {
  const testValue = 1997;
  const newMusician = new Musician("Alice", "Rock", testValue);
  expect(newMusician.yearCreated).toBe(testValue);
});

test("Can set numOfAlbums via constructor argument", () => {
  const testValue = 5;
  const newMusician = new Musician("Alice", "Rock", 1997, testValue);
  expect(newMusician.numOfAlbums).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const newMusician = new Musician(testValue);
  expect(newMusician.getName()).toBe("Hello, "+testValue);
});

test("getType() should return \"Musician\"", () => {
  const testValue = "Musician";
  const newMusician = new Musician("Alice","Rock", 1997, 5);
  expect(newMusician.getType()).toBe(testValue);
});