# Bitwise Operators
My goal is to gain an intuition for how bitwise operators work. My method is to build an interface that takes in an integer (from user input) and displays a list of bitwise commands. I also want the input field to update with the output of the previous command, and for all commands to be printed to the DOM as an unordered list.

Here's the [demo](https://zackstout.github.io/bitwise-operators/).

## Built With:
- Dash
- p5.js

## Note to self:
It will be a good challenge to clean up and curry the JavaScript version, and to get the Dash version working (the main challenge is that each Output can be controlled by only one callback function.)

Note: Usually we use the first bit of a number to represent its sign (1 for negative, 0 for positive). Hence, right shift preserves sign.
