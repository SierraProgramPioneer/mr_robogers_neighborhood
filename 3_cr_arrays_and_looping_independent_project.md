### Mr. Roboger's Neighborhood

Create a web application that takes a number from the user and returns a list of values from 0 to the user's inputted number with the following substitutions made within the returned list:

- For numbers that contain a 1, all digits are replaced with _"Beep!"_
  - For example, all digits of the number `109`, `11`, or `1` would be replaced with _`"Beep!"`_
- For numbers that contain a 2, all digits are replaced with _"Boop!"_
  - For example, all digits of the number `2`, `24`, or `2099` would be replaced with _`"Boop!"`_
- For numbers that contain a 3, all digits are replaced with _"Won't you be my neighbor?"_
  - For example, all digits of the number `39`, `3`, or `8763` would be replaced with _`"Won't you be my neighbor?"`_

Additionally, you will need to:

- Solve this prompt using at least one loop, at least one array, and branching logic.
- Design the application so that a user is able to enter a new number and see new results over and over again.
- Remember that you need to return a list of values from 0 to the user's inputter number. This means printing each element in the list to the webpage. Check out the section below that shows example inputs and outputs. You can use whatever data type you need to create the list: an array with a mix of numbers and strings, an array with only strings, or just a string. Do whatever makes sense to you.
- Write tests for your application's business logic. See the section below that covers testing.

### A Few Examples

**Example 1:** If a user inputs a 5, the program should display a list of values starting with 0 to the user's inputted number, with the numbers 1, 2, and 3 substituted with the correct phrase.

- Input: `5`
- Output: `0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5`

**Example 2:** If a user inputs a 13, the program should display a list of values starting with 0 to the user's inputted number, with the numbers 1, 2, 3, 10, 11, 12, 13 and 14 substituted with the correct phrase. This example shows the hierarchy of substitutions that should be followed, which is explained further below.

- Input: `14`
- Output: `0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!"`

### Hierarchy of Substitutions

These substitutions are written from least to most important. The first substitution should apply unless the second does, and the same with the second and third. In other words, the substitution for the number 1 should apply unless there's a 2 present in the number. Then, the substitution for the number 2 should apply unless there's a 3 present in the number.

So, for example, in your finished program:

- The number 13 should be replaced with _"Won't you be my neighbor?"_
- The number 12 should be replaced with _"Boop!"_.
- The number 23 should be replaced with _"Won't you be my neighbor?"_
- The number 21 should be replaced with _"Boop!"_.

### Tests

You should use Test-Driven Development to create your business logic:

1. First, identify the functionality you need in your program, and then break it down into separate steps (or pieces of functionality) that are ordered from simple to most complex.
2. For each piece of functionality, follow the TDD process:

- Write a test using the pseudocode test syntax you've learned in this section. Add this test to your `README.md` file in a section labelled `Tests`.
- Then, write the smallest amount of code in your scripts that will pass the test.
- Finally, manually verify that the test passes by running the code in the DevTools console. You'll know your test is passing if the expected output in your test matches the actual output from running your code in the DevTools console.

The code snippet below has a few example tests. You're welcome to use them to help get you started. **Take note:** you do not have to use the example tests below. You can choose to name your function differently, and your function doesn't necessarily need to output an array — it could output a string instead. You also may choose to create multiple functions instead of just one.

```
Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(0);
Expected Output: [0]

Test: "It should replace numbers that contain a "1" with "Beep"
Code: beepBoop(1)
Expected Output: [0,"Beep"]

Test: "It should replace numbers that contain a "2" with "Boop"
Code: beepBoop(2)
Expected Output: [0, "Beep", "Boop"]
```

Keep in mind that the `Describe` statement is listed once, for a single function. If there is another piece of functionality that your `beepBoop()` function handles, you should write a new test that is part of the same `Describe` block. If you have a different function, then you should have a separate `Describe` statement for it, along with any tests.

Do not write tests for user interface logic, which is any code that accesses or manipulates the DOM. Only write tests for your business logic. In the example tests, `beepBoop()` is a part of the business logic.

Include tests in your README for _all_ functionality in your business logic.

## Objectives

---

Your code will be reviewed for the following objectives:

- JavaScript business logic and user interface logic are separate.
- Tests are included for each business logic behavior and code is committed after each test passes.
- Application implements a loop and works as expected.
- The user can use the application repeatedly and see new results.
- Project is in a polished, portfolio-quality state.

### What is a polished, portfolio-quality state?

When a project is both polished and in a portfolio-quality state, this means:

- You've reviewed your project and your README prior to submitting it to make sure there are no errors or missing information and you are consistent in your indentation, spacing, and code structure.
- You are following the best practices and coding conventions we teach. Make sure that your:
  - Code is clean, well-refactored, and easy-to-read. This includes correct indentation, spacing, and including only necessary comments and debugging tools.
  - Variable names are descriptive and use lower camel case (e.g. `myVariableExample`).
  - Commits are made regularly with clear messages that finish the phrase "It will…".

## Further Exploration

---

If you finish meeting the objectives for this project, consider adding additional features, such as:

- Add images, styling, and custom animations.
- Implement different behaviors/effects/images for different inputs.
- Include an option that returns the output in reversed order (beginning with the largest number).
- Add a second form field that takes a name as an input. Then update the output so that the program states "Won't you be my neighbor, [name]?" instead of "Won't you be my neighbor?"

## Submission

---

Please submit your Github repo in the replies to this post. The structure of the URL should look like this:

`https://github.com/your-user-name/your-project-name`

Feel free to include a GH Pages link as well, but make sure to include the link to your repo so your source code can be reviewed.
