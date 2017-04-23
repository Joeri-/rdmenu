# Rdmenu

## Run locally
start by running `npm install` to get the dependencies  
install mongodb `brew install mongodb`  
make a folder for mongo to store the databases `mkdir -p /data/db`  
change the permissions of the folder accordingly to allow read/write access to mongo
`sudo chmod 755 .` in the /data/db folder

Run the mongo daemon in a separate terminal window, by running `mongod`

Run `npm start` to build the angular dist folder and start the server on port 8080


## Auto generated Angular2 Readme below

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
