# JavaScript Exercises
My solution to the JavaScript Exercises from The Odin Project

## Table of Contents
[Introduction](Introduction)
[Motivation](Motivation)
[Built With](Built With)
[How To Do These Exercise](How To Do These Exercise)
[Acknowledgements](Acknowledgements)

## Introduction
These JavaScript Exercises are of the [Foundations Course](https://www.theodinproject.com/paths/foundations/courses/foundations) from [The Odin Project](https://www.theodinproject.com/). The exercises include directions and tests to confirm it met the challenge parameters. THey covered a variety of common JavaScript tasks such changing strings, modifying and removing items from arrays, finding and displaying specific objects from arrays, and doing math functions. 

## Motivation
I did these exercises as a part of the JavaScript Basics section in [Foundation Course](https://www.theodinproject.com/paths/foundations/courses/foundations) from [The Odin Project](https://www.theodinproject.com/). I completed that section and course to practice JavaScript and see how much I could do on my own and what I still need to work on.

## Built With
JavaScript

## How To Do These Exercise
### Directions from The Odin Project
1. Fork and clone this repository. To learn how to fork a repository, see the GitHub documentation on how to [fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo). 
    * Copies of repositories on your machine are called clones. If you need help cloning to your local environment you can learn how from the GitHub documentation on [cloning a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository).
2. Before you start working on any execises, you should first ensure you have the following installed:
    * **NPM**. You should have installed NPM already in our [Installing Node.js](https://www.theodinproject.com/lessons/foundations-installing-node-js) lesson. Just in case you need to check, type `npm --version` in your terminal. If you get back `Command 'npm' not found, but can be installed with:`, **do not follow the instructions in the terminal** to install with `apt-get` as this causes permission issues. Instead, go back to the installation lesson and install Node with NVM by following the instructions there.
    * **Jest**. After cloning this repository to your local machine and installing NPM, go into the newly created directory (`cd javascript-exercises`) and run `npm install`. This will install Jest and set up the testing platform based on our preconfigured settings.
3. Each exercise includes 3 files: a markdown file with a description of the task, an empty (or mostly empty) JavaScript file, and a set of tests. To complete an exercise, you'll need to go to the exercise directory with `cd exerciseName` in the terminal and run `npm test exerciseName.spec.js`. This should run the test file and show you the output.
    * When you first run a test, it will fail. This is by design! You must open the exercise file and write the code needed to get the test to pass. 
4. Some of the exercises have test conditions defined in their spec file as `test.skip` compared to `test`. This is purposeful. After you pass one `test`, you will change the next `test.skip` to `test` and test your code again. You'll do this until all conditions are satisfied. **All tests must pass at the same time**, and you should not have any `test.skip` instances by the time you finish an exercise.
5. Once you successfully finish an exercise, check TOP's `solutions` branch to compare it with yours. 
   * You should not be checking the solution for an exercise until you finish it!
   * Keep in mind that TOP's solution is not the only solution. Generally as long as all of the tests pass, your solution should be fine.
6. Do not submit your solutions to this repo, as any PRs that do so will be closed without merging.

**Note**: Due to the way Jest handles failed tests, it may return an exit code of 1 if any tests fail. NPM will interpret this as an error and you may see some `npm ERR!` messages after Jest runs. You can ignore these, or run your test with `npm test exerciseName.spec.js --silent` to supress the errors.

The first exercise, `helloWorld`, will walk you through the process in-depth.

## Acknowledgements
[The Odin Project](https://www.theodinproject.com/) for putting together the curriculum have having their [resources](https://github.com/TheOdinProject/javascript-exercises) easily available
