const SingleArtist = require("../constructors/SingleArtist");

test("Can set members account via constructor", () => {
  const testValue = "Queen, Mick Jagger";
  const newSingleArtist = new SingleArtist("David Bowie", "rock/pop", 1972, 15, testValue);
  expect(newSingleArtist.collaborations).toBe(testValue);
});

test("getType() should return \"SingleArtist\"", () => {
  const testValue = "Single Artist";
  const newSingleArtist = new SingleArtist("David Bowie", "rock/pop", 1972, 15,"Queen, Mick Jagger");
  expect(newSingleArtist.getType()).toBe(testValue);
});

test("Can get list of collaborators via getCollaborations()", () => {
  const testValue = "Queen, Mick Jagger";
  const newSingleArtist = new SingleArtist("David Bowie", "rock/pop", 1972, 15,"Queen, Mick Jagger");
  expect(newSingleArtist.getCollaborations()).toBe(testValue);
});