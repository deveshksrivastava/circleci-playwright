# playwright

this is used to run e2e testing, we have configured application for circleci and github work flow



link - 
``https://anivaz.medium.com/running-playwright-tests-in-circleci-b21887d7369e

$ npm init playwright@latest

The command above will download the browsers needed as well as create the following files

playwright.config.ts
package.json
package-lock.json
tests/example.spec.ts
tests-examples/demo-todo-app.spec.ts

3. Run your test with the following command:
``npx playwright test``
4. Test report can be displayed by running:
``npx playwright show-report``

Inside that directory, you can run several commands:

5. Runs the end-to-end tests.
  ``npx playwright test``

6.  Starts the interactive UI mode.
  ``npx playwright test --ui``


7.   Runs the tests only on Desktop Chrome.
  ``npx playwright test --project=chromium``

8.    Runs the tests in a specific file.
 `` npx playwright test example``

9.   Runs the tests in debug mode.
  ``npx playwright test --debug``

10.   Auto generate tests with Codegen.
``npx playwright codegen``

We suggest that you begin by typing:

    ``npx playwright test``