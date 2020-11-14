# practice-problems-basic-functions

The objective of this first practice problem is to get used to the testing suite interface, and to begin to develop the skills of breaking down problems so that they can be solved. This ability to break down problems into small solvable pieces is a skill that can only be developed with practice, as you literally have to create new neuro-pathways in the brain. But don't worry, this problem and the ones which follow are designed to help you do just that.

Take your time as you go through this initial collection of functions, as it is important to understand how the testing suite will work, and how to take feedback from it into consideration when solving problems.

With that introduction in mind, let's get started!

### Before You Begin

Be sure to check out a new branch (**from master**) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md).

### Exercise
For this exercise you will be constructing several generic string concatenation and calculation functions. You are given a description of each function, a suite of unit tests for each function, and an empty JavaScript file in which to write your implementation for each function.

Your goal is to define each function according to its description, such that all of its tests pass.

Begin by skimming through `index.html` in your code editor, then opening it in your web browser. You should see **`ReferenceError: ... is not defined`** a few times on the page.



Open `src/string-1.js` and `src/string-1.test.js` in your code editor and skim the code in `string-1.test.js`. As you add to or modify `string-1.js`, reload `index.html` in your browser to receive feedback. Work through defining each function specified below until all unit tests pass.

1. ### `returnString(string)`

    #### Parameters

      - `string` - Any JavaScript `string`

    #### Return Value

    The value of the `string` parameter.

    #### Examples

    ```js
    returnString("hello")      // -> "hello"
    returnString("pizza")     // -> "pizza"
    returnString("howdy")     // -> "howdy"
    ```

2. ### `favoriteFood(food)`

    #### Parameters

    - `food` - Your favorite food in a JavaScript `string`

    #### Return Value

    The value of the `food` parameter concatenated into the following string:
    ```
    "[food] is my absolute favorite food.".
    ```
    #### Examples

    ```js
    favoriteFood("pizza")      // -> "pizza is my absolute favorite food."
    favoriteFood("sushi")     // -> "sushi is my absolute favorite food."
    favoriteFood("bbq")     // -> "bbq is my absolute favorite food."
    ```

3. ### `favoriteMovie(movie)`

    #### Parameters

    - `movie` - Your favorite movie in a JavaScript `string`

    #### Return Value

    The value of the `movie` parameter concatenated into the following string:
    ```
    "My favorite movie is [movie].".
    ```
    #### Examples

    ```js
    favoriteMovie("Inception")      // -> "My favorite movie is Inception."
    favoriteMovie("Enter the Void")     // -> "My favorite movie is Enter the Void."
    favoriteMovie("Shawshank Redemption")     // -> "My favorite movie is Shawshank Redemption."
    ```

4. ### `favoriteSong(song, artist)`

    #### Parameters

    - `song` - Your favorite song as a JavaScript `string`
    - `artist` - The artist of your favorite song as a Javascript `string`

    #### Return Value

    The value of the `song` and `artist` parameters concatenated into the following string:
    ```
    "My favorite song is [song] by [artist]."
    ```
    #### Examples

    ```js
    favoriteSong("Jane", "Jefferson Starship")      // -> "My favorite song is Jane by Jefferson Starship."
    favoriteSong("Neon", "John Mayer")     // -> "My favorite song is Neon by John Mayer."
    favoriteSong("Right in Two", "Tool")     // -> "My favorite song is Right in Two by Tool."
    ```

5. ### `favoriteActivity(activity, reason)`

    #### Parameters

    - `activity` - Your favorite activity as a JavaScript `string`
    - `reason` - The reason you enjoy your favorite activity as a JavaScript `string`

    #### Return Value

    The values contained in the `activity` and `reason` parameters concatenated into the following string:
    ```
    "My favorite activity is [activity], because I really like [reason]."
    ```
    #### Examples

    ```js
    favoriteActivity("golf", "a challenge")      // -> "My favorite activity is golf, because I really like a challenge."
    favoriteActivity("sleeping", "to rest")     // -> "My favorite activity is sleep, because I really like to rest."
    favoriteActivity("car racing", "to go fast")     // -> "My favorite activity is car racing, because I really like to go fast."
    ```

6. ### `addNumbers(num1, num2)`

    #### Parameters

    - `num1` - Any JavaScript `number`
    - `num2` - Any JavaScript `number`

    #### Return Value

    The sum of the two numbers.
    #### Examples

    ```js
    addNumbers(10, 5)      // -> 15
    addNumbers(32, 4)     // -> 36
    addNumbers(10, 21)     // -> 31
    ```

7. ### `multiplyNumbers(num1, num2)`

    #### Parameters

    - `num1` - Any JavaScript `number`
    - `num2` - Any JavaScript `number`

    #### Return Value

    The product of the two numbers.
    #### Examples

    ```js
    multiplyNumbers(10, 5)      // -> 50
    multiplyNumbers(32, 4)     // -> 128
    multiplyNumbers(10, 21)     // -> 210
    ```

8. ### `addAndSquareNumbers(num1, num2)`

    #### Parameters

    - `num1` - Any JavaScript `number`
    - `num2` - Any JavaScript `number`

    #### Return Value

    The result of summing the two numbers, and then squaring the sum.
    #### Examples

    ```js
    addAndSquareNumbers(4, 5)      // -> 81
    addAndSquareNumbers(5, 10)     // -> 225
    addAndSquareNumbers(8, 2)     // -> 100
    ```

9. ### `findRightTriangleArea(base, height)`

    #### Parameters

    - `base` - Any JavaScript `number`
    - `height` - Any JavaScript `number`

    #### Return Value

    The area of a right triangle which has the supplied base and height.
    #### Examples

    ```js
    findRightTriangleArea(10, 5)      // -> 25
    findRightTriangleArea(20, 10)     // -> 100
    findRightTriangleArea(8, 7)     // -> 28
    ```

10. ### `generateMathSentence(num1, num2)`

    #### Parameters

    - `num1` - Any JavaScript `number`
    - `num2` - Any JavaScript `number`

    #### Return Value

    The values contained in the `num1` and `num2` parameters concatenated into the following string:

    ```
    "The sum of [num1] and [num2] is [sum of num1 and num2]."
    ```


    #### Examples

    ```js
    generateMathSentence(10, 5)      // -> "The sum of 10 and 5 is 15."
    generateMathSentence(20, 10)     // -> "The sum of 20 and 10 is 30."
    generateMathSentence(15, 7)     // -> "The sum of 15 and 7 is 22."
    ```





5. When your tests are all passing successfully, congratulations! You now have some experience with a testing suite and are ready to move on to solving many more practice problems!
    - Move on to the `Submitting You Solution` section below!


### Submitting Your Solution

When your solution is complete, change directories to the root of your `lfz-mod-2-lessons` repository. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).

### Quiz

- What is the purpose of doing practice problems?
- Why is it so important to develop strong debugging skills?
