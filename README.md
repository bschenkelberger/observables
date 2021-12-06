# Observables

Ein Observable ist eine Technik zur gemeinsamen Nutzung von Daten. Ein Observable liefert einen Strom von Werten zurückgeben. Observables sind kein Angular-spezifisches Feature, sondern ein neuer Standard für die Verwaltung asynchroner Daten (der in der ES7-Version enthalten ist.)

Observables verwenden das Publish-and-Subscribe-Modell. Es wandelt einen Datenstrom in einen beobachtbaren Datenstrom um. Anschließend können sie diese Daten sowie Signale ausgeben, um Fehler oder die Fertigstellung des Datenstroms anzuzeigen.

Ein Observable allein ist nicht sehr nützlich, denn die Daten, die das Observable ausgibt, müssen von etwas anderem genutzt werden. Diese werden Beobachter genannt.

Eine Observable-Methode (Publisher) wird erst dann ausgeführt und gibt Daten aus, wenn ein Beobachter (Subscriber) sie abonniert hat. Die Kommunikation zwischen dem Observable und dem Observer erfolgt über drei Callbacks.

next()
error()
complete()

```
object_name = new Observable((observer) => {
  // Logic
})
```

```
object_name = new Observable((observer) => {
  observer.next();
})
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
