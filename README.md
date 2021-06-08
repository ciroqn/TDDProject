# TDD Project

## About
This is a small project to create a small quote app that uses feature tests: these feature tests are used to simulate the behaviour of a user in the web browser. 

## Synopsis
This is a simple app that allows a user to post a quote, along with its author and source. The main point of this code is to use 
a feature test to simulate user behaviour without the need to use the web browser itself to test a web app. We have a html file
that has the necessary tags (and ids), and these tags/ids are referenced in the test file (test.js). We import the assert module from 
[Chai Assertion Library](https://www.chaijs.com/), and we can use the '.include()' method to check to see whether the returned text 
from a particular tag returns the strings given by a user (which is simulated using the 'browser' variable).

### What is TDD?
This is 'test-driven development': the tests are written before the code. This allows the developer to have more confidence in the code 
that they do write since utility code etc. is very much determined (and refined) by the tests. Tests *inform* the implementation of a feature, 
or outcome. This follows the [red, green, refactor cycle](https://www.codecademy.com/articles/tdd-red-green-refactor).
