import { isValidUser } from "./validate";

test("Text User Success", () => {
  expect(
    isValidUser({
      firstname: "Sujan",
      lastname: "Gautam",
      email: "1@gmail.con",
    })
  ).toBe(true);
});

test("Text User Fail", () => {
  expect(
    isValidUser({
      firstname: "101Sujan",
      lastname: "Gautam",
      email: "1@gmail.con",
    })
  ).toBe(false);
});
