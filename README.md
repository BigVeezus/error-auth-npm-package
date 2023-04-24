
# Authentication, Authorization and Errors Middleware Package for Node/Express

This package is for Nodejs and Express backend development to handle errors




## Installation

Install the package with npm.

```bash
  npm install @ticketifyorg/common
```
Ignore any "Express-validator" or deprecation errors you might see on your terminal.
## Quick Set-up

In the "app.js" or "Index.js" file of your project root,

Import **errorHandler** using whichever module method.

`const {errorHandler} = require("@ticketifyorg/common");`

OR

`import {errorHandler} from "@ticketifyorg/common";`

Then use the **errorHandler** at the very **END** of your root project after the `app.listen()`
like this 

e.g `app.use(errorHandler)`;

Now, test the **errorHandler** if it works by creating an **app.all** router by importing the `NotFound` error module so the top of your project looks like this

`const { errorHandler, NotFoundError } = require("@ticketifyorg/common");`

Create the `App.all` router calling the **NotFoundError()**

`app.all("*", (req, res) => {
  throw new NotFoundError()
})`

If you installed everything properly and hit an unknown route on your localhost, you should see a
'Route not found' error on your browser.

**Enjoy and access the rest of the [Documentation](https://linktodocumentation) here.**




## Screenshots

![App Screenshot](https://files.fm/thumb_show.php?i=x4rngm2gd)


## Signing In and Signing Up validation Set-up


This package works with **express-validator** package to help validate your Sign In and Sign Up post request.

To get started, all you have to do is import 

`const { body } = require("express-validator");`

& 

`const { validateRequest } = require("@ticketifyorg/common");`

to the top of your project.

**NOTE:** if you already have `@ticketifyorg/common` package installed, you **DONT** need to install the `express-validator` package.

Chain your Sign-Up/Sign-In endpoint buy passing the validator chain as a middleware. 
See [Express-validator docs](https://express-validator.github.io/docs/guides/validation-chain) here.

After chaining up your middleware, all you have to do is pass in the `validateRequest` middleware in the router like in the screenshot below.

## Screenshots

![App Screenshot](https://files.fm/thumb_show.php?i=a2akznjnt)
## Authors

-  Your one and only [@bigVeezus](https://www.github.com/bigVeezus)


## Contributing

Contributions are always welcome!

Please adhere to this project's `code of conduct`.

