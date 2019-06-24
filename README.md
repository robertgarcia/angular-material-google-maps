# Mapas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Angular Material

npm install --save @angular/material @angular/cdk @angular/animations OR ng add @angular/material

## AGM (Angular Google Maps)

npm install @agm/core

Open src/app/app.module.ts and import the AgmCoreModule. You neeed to provide a Google Maps API key to be able to see a Map : `AgmCoreModule.forRoot({ apiKey: 'YOUR_KEY' })` 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
