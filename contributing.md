
##Contribution Guidelines
<hr />
###Tech Stack
ReactJS - View <br />
ReduxJS	- Logic <br />
Babel - Transpiling to es5 <br />
Sass - Styling <br />
Webpack - Bundling <br />
MochaJS and ChaiJS  <br />
Express - Server <br />
MondoDB - Storage <br />
O-Auth - Security

###Work Flow
Source code should be in src folder, tests in test folder. <br />
Tickets and issues are in the waffle.io board. Please grab/submit tickets there, though they should be integrated through gitissues as well. <br />
####ES6
Please use es6 syntax everywhere possible. ES6 features will be transpiled via Babel when webpack runs (npm start), and when es6 standards are implemented in browsers, refactoring code to use es6 syntax will be unnecessary. <br />
As ES6 incorporates block scope amongst other things, variable naming should not be an issue. Still, please follow best practices and refrain from using global variables.
####Back-end
Please refrain from allowing back-end code from becoming full-on spaghetti. Adhere to best practices, and add functions for back-end to appropriately named files in server folder. In case es6 is not supported on server, please use module.exports/require rather than es6 import.
####Styling
Styling will be done with Sass. <br />
Please use .scss file extensions. Webpack will transpile .scss files into .css before applying the styles and bundling all js into one bundle.js <br />
Please check classes-and-ids.md All classNames and id's should be listed there, along with their roles in responsive design (ie: .className : fluid container for main display area. )<br />
Sass variables should all be located in src/styles/sass-vars.scss <br />
Sass Mixins and functions should be in src/styles/sass-mix-func.scss This will allow code to be DRY'er, and developers will be able to use mixins and functions created by others.
###Testing
Please write tests using for all features created, ensuring they pass before submitting a pull request. <br />
All features should be end-to-end tested. <br />
Please keep all tests in test folder. The test folder should mimic the root folder exactly, with folders and file names of test files corresponding to what is being tested in src folder (ie: hso/src/components/Store.js should be tested in test/src/components/Store.js).
###Comments
Please keep in mind that this project may be inherited by other devs, or that we ourselves on the current team may forget what aspects of code are supposed to do. <br />
With that in mind, please comment code, following best practices.
####Thanks for reading, and happy hacking!!!
