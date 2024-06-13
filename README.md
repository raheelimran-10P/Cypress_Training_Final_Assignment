# Cypress_Training_Final_Assignment
Cypress Training Final Assignment

## Setup
This project requires an up-to-date version of Node

To set up this project on your local machine:
1. Clone it from this GitHub repository and open the project in the VS code and open terminal in it.
2. Run `npm i --force` or `npm install --force` from the command line in the project's root directory (it will install node module folder and packages existing in package.json file).
3. Now if you install any other packages so use command `npm install -save-dev <package-name>` it will install package locally. If you get some error after this command so run `npm cache clean -force`.
4. If you update or install any new package so update package.json on repo.

## Setup env file at the root

Create cypress.env.json file at the root of the project location, and add below values like
```
{
    "name": "value",
    "api_server": "http://localhost:8888/api/v1/"
}

```

## Running Tests

Run `npx cypress open` or `npx cypress run` from the command line
Run specific test case `npx cypress run --spec "cypress\e2e\Tests\Web\DemoQaTests.cy.js" --headed"` from the command line


## More Info

