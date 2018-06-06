# where-for-lunch
![where for lunch](https://reactiongifs.me/wp-content/uploads/2013/12/om-nom-nom-nom-chipmunk.gif)

Decide a lunch place for you!
## Getting Setup
#### Download [Node v8+](https://nodejs.org/en/download/) or install by [NVM](https://github.com/creationix/nvm#installation)

Check if Node is succesfully installed:
```sh
$ node -v
```

#### Install Dependencies
```sh
$ npm install
```
#### Starting the app

run client:
```sh
$ npm run webpack-dev
```

run server:
```sh
$ npm run start
```

On development, run client & server at one go
```sh
$ npm run dev
```

#### Running tests

```sh
$ npm test
```
#### Local development:
http://localhost:3000/#/ 

For server side, this repo uses 3001 as the default port number, if you want to change to a port number you prefered, add it to your own .env file and change your axios baseUrl (do not commit this)

#### Dev Tools

There are a few chrome extensions that make development a breeze.

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux DevTools extension](https://github.com/zalmoxisus/redux-devtools-extension)


## Application Structure

```
.
├── client
│   └── index.js    # client app bootstrapping and rendering
│   └── actions     # redux actions
│   └── assets      # assets that are not component-specific, including images or fonts
│   └── components  # presentational react components that are mostly stateless, not connected to redux store
│   └── constants
│   └── containers  # container react components that subscribe to redux
│   └── lib
│   └── middleware  # redux middlewares
│   └── reducers    # redux reducers
│   └── routes      # react-router
│   └── sagas       # redux sagas, generators mostly used for dealing with async flows
│   └── services    # API services
│   └── store       # redux store with middlewares applied and reducers connected
│   └── styles      # global styles, variables
│   └── types       # custom prop types for react components
├── config          # webpack and other config files
├── server
│   └── app.js      # express app setup including routes
│   └── server.js   # server app entry point
│   └── lib
│   └── routes      # express routes
│   └── services    # API services
├── .env            # used for development only, store env variables
└── test
    └── client      # jest unit tests and component tests
       └── components
         └── __snapshots__ # jest components snapshots
    └── server      # to be implemented
    └── setup.js    # scripts needed to run tests
    └── jestSetup.js# jest setup
```

## Some more explanations
#### .env
local development env variables. For an existing copy click [here](https://docs.google.com/document/d/1eBrScTPJYRMmVXSi4IBaaXugL3lj-Xso9IDf0LL_bDw/edit?usp=sharing)
#### test
This repo uses jest as the main test framework. For component tests, you can either choose jest + enzyme or jest snapshots. There are two examples set for Place.js.
For debugging purpose, tests can be ran under auto reload mode
```sh
$ npm run test-tdd
```

To update the snapshots after logic changes:
```sh
$ npm run jest-update
```
Note that it's your responsibility to make sure the updated snapshots are the correct ones

Api tests, server side, saga are still pending for tests to be implemented.

**For any new logics, please add tests in.**

#### node
Server side uses await, if you prefer to use Promise, please go ahead

#### Eslint
Please make sure there are no eslint errors, for your convenience, it is recommended to install eslint on your local editor.

#### ES6
This repo uses es6 syntax. Please stick with it.

#### CSS
This repos uses CSS module and with PostCSS plugins. In general, you can define your style as global styles or component styles which stays within each component directory

## Production mode:
Not implemented yet
