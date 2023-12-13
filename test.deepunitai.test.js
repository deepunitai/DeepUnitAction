import { add } from "./test";

// Mock jest functions for setup and cleanup
jest.mock("jest");

// Mock jest functions for setup and cleanup
// Mock jest functions for setup and cleanup
describe("add function", function () {
  // Reset all mocks before each test
  beforeEach(() => {
    jest.resetAllMocks();
  });
  // Restore all mocks after each test
  afterEach(() => {
    jest.restoreAllMocks();
  });
  // Test case 1: Check the sum of two positive numbers
  it("should correctly add two positive numbers", () => {
    const result = add(5, 3);
    expect(result).toBe(8);
  });
  // Test case 2: Check the sum of two negative numbers
  it("should correctly add two negative numbers", () => {
    const result = add(-5, -3);
    expect(result).toBe(-8);
  });
  // Test case 3: Check the sum of a positive number and a negative number
  it("should correctly add a positive number and a negative number", () => {
    const result = add(5, -3);
    expect(result).toBe(2);
  });
});

// Initializing Jest test suite
describe("Testing add function", function () {
  // beforeEach and afterEach hooks to reset and restore all mocks before and after each test
  beforeEach(() => {
    jest.resetAllMocks();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  // Testing if the add function returns the correct sum of two numbers
  it("should return the sum of two numbers", () => {
    const a = 5;
    const b = 3;
    const expected = 8;
    // Call the add function with test inputs
    const result = add(a, b);
    // Assert that the output matches the expected result
    expect(result).toEqual(expected);
  });
  // Testing if the add function is correctly handling non-numeric inputs
  it("should return NaN for non-numeric inputs", () => {
    const a = "a";
    const b = 3;
    // Call the add function with test inputs
    const result = add(a, b);
    // Assert that the output is NaN
    expect(result).toBeNaN();
  });
});
