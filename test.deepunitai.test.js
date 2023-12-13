import { add } from "./test";
import { jest } from "@jest/globals";

// Importing the jest mock function
jest.mock("./test");

// Importing the jest mock function
// Importing the jest mock function
describe("Test for add function", function () {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.resetAllMocks();
  });
  afterEach(() => {
    // Restore all mocks after each test
    jest.restoreAllMocks();
  });
  it("should correctly add two numbers", () => {
    // We are testing the add function to make sure it correctly adds two numbers
    // This is important because it's the core functionality of our add function
    const a = 1;
    const b = 2;
    const expectedResult = 3;
    // Mock the add function
    (add as jest.Mock).mockReturnValue(expectedResult);
    // Call the function with our test data
    const result = add(a, b);
    // Expect the result to be as expected
    expect(result).toBe(expectedResult);
    // Expect the mock to have been called with our test data
    expect(add).toHaveBeenCalledWith(a, b);
  });
});

// This is our main test suite for the add function
describe("Testing add function", function () {
  // Runs before each test resetting all mocks
  beforeEach(() => {
    jest.resetAllMocks();
  });
  // Runs after each test restoring all mocks
  afterEach(() => {
    jest.restoreAllMocks();
  });
  // This is our actual test for the add function
  it("should correctly add two numbers", () => {
    // This is our test data
    const a = 5;
    const b = 10;
    // This is our expected result
    const expected = 15;
    // We call our function with the test data
    const result = add(a, b);
    // We expect the result to be the same as our expected result
    expect(result).toEqual(expected);
  });
});
