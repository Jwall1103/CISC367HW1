# Typescript-practice

Repository full of sample typescript problems.

When you are done this assignment, replace the text below to indicate how many of the problems you have finished.

**Current Progress:** I have completed all problems and classes.

You should complete as many questions as you can.
This is a chance to learn how to write TypeScript.

Dr. Pollock set up unit tests for all but the Class questions (Thanks Lori!) - you are directed to write your 
instantiations rather than unit testing them. The other questions all 
have unit tests through *Jasmine* (a popular JS/TypeScript unit testing framework).

These questions are not meant to be assessments. They are learning opportunities. Most of them came from the internet, so you shouldn't be afraid to google to help figure things out. Focus on learning key concepts in TypeScript!

# Testing your solutions

You need to have node.js installed, which you can get from node.js.org. If you followed the Instructions in Step 2 of the assignment, you should have all the necessary software / tools needed for this assignment.

Once properly configured, you should be able to run all the tests using the `test` command
in `package.json`, as follows:

From within VSCode, expand "NPM SCRIPTS" in the bottom left corner, expand `package.json`.
There should be a `test` command; hovering over it will expose a triangular "run" button.
Click the button and you should see that you are currently failing all the unit tests.

If the "NPM SCRIPTS" menu is not available, then open up your `package.json` file, 
right-click anywhere on line 6, and click "run script". 
Afterwards, the menu  should appear for this project to tell you how to run the tests.  

If the "NPM SCRIPTS" are still not visible, click the . . . by the EXPLORER 
tab at the top left hand side, then select NPM Scripts

If the run 'test' instructions don’t work, check to see that you have ts-node installed.
Type the command
ts-node –version 
in the terminal. If it's not installed type the command
npm install -g ts-node
then rerun Line 6

	
Go through each of the following files and implement them. You can run the unit tests
at any time to see whether your solution is working.

* `src/strings.ts`
* `src/arrays.ts`
* `src/objects.ts`
* `src/classes.ts`

## Example Error Output

When you fail a unit test, you can see output like this:

```
21) countTriple xxxabyyyycd
  Message:
    Expected 0 to be 3.
  Stack:
    Error: Expected 0 to be 3.
        at <Jasmine>
        at UserContext.<anonymous> (C:\Users\acbart\Projects\cisc374\games\try-typescript\tests\strings.test.ts:38:44)
        at <Jasmine>
```

You can also install the [Jasmine Test Explorer](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-jasmine-test-adapter) extension to improve the output.
