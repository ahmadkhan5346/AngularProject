# AngularContactManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Create project
install angular: npm install -g @angular/cli
create a project: ng new angular-contact-manager
start server: npm start
* bootstrap fortawesome
npm i bootstrap @fortawesome/fontawesome-free
google search> cdnjs font awesome
all.min.css insert in index.html in heading 
scripts and styles configuration in angular.json
google font configuration in style.css file globally

creating component
navbar
contact-manager
add-contact
edit-contact
view-contact
spinner
creating a component command
ng g c <component_name>

creating a services command
ng g s <services_name>

### Create a dummy server for practice
create package.json in server folder
npm init --yes
then install server
npm install json-server

add inside package.json file in scripts
"start": "json-server --watch db.json -p 9000"

open terminal in server folder and run command
npm start


View all Contacts -> GET -> http://localhost:9000/contacts/
View Single contact -> GET -> http://localhost:9000/contacts/:contactID
Create a Contact -> POST -> http://localhost:9000/contacts/
Update a Contact -> PUT -> http://localhost:9000/contacts/:contactID
Delete a Contact -> DELETE -> http://localhost:9000/contacts/:contactID
