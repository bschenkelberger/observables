# Observables

- Observables sind kein Angular-spezifisches Feature, sondern ein neuer Standard für die Verwaltung asynchroner Daten (der in der ES7(ECMAScript 2016)-Version festgelegt wurde)
  Observables selbst sind ein integraler Bestandteil des `Reactive Programming`

  ### Reactive Programming
  Es geht darum, Datenströme zu erzeugen, Werte, Fehler oder vollständige Signale auszusenden, zu manipulieren, zu übertragen oder etwas nützliches mit den Datenströmen zu tun.
  [Rx zum Nachlesen](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)

  `Reactive Programming` und die damit einhergende Verwendung von Observables sind fester Bestandteil von Angular. Angular brint als Abhängigkeit das Module `RxJS (Reactive Extensions Library for JavaScript)` mit.

  ```
  "dependencies": {
    "@angular/animations": "~8.1.0",
    ...,
    "rxjs": "~6.4.0",
  },
  ```

  - 

- Observables verwenden das Publish-and-Subscribe-Modell.
- Eine Observable-Methode (Publisher) wird erst dann ausgeführt und gibt Daten aus, wenn ein Beobachter (Subscriber) sie abonniert hat. Die Kommunikation zwischen dem Observable und dem Observer erfolgt über drei Callbacks.

  ```
  next() // Erfolgsfall - erhält die Daten
  error() // Fehlerfall - erhält Informationen über den Fehler bzw. das Fehlerobjekt
  complete() // Abschluss 
  ```
  Alle drei Funktionen sind optinal.

  ```
  myObservable$ = new Observable((observer) => {
    //  succes
  }, (error) => {
    // error
  }, () => {
    // complete
  })
  ```
  Namenskonvention, Obersavales sollen mit einem endenen `$` gekennzeichnet werden

  Erste wenn es einen `subscriber` gibt werden die Daten geliefert
  ```
  myObservable.subscribt()
  ```
  Es ist möglich durch Aufruf der `unsubscribt` Funktion, den Datenstrom abzubestellen
  ```
  myObservable.unsubscribt()
  ```


## Links
### https://angular.io/
- [observables overview](https://angular.io/guide/observables).
- [The RxJS library](https://angular.io/guide/rx-library#the-rxjs-library).
- [Observables in Angular](https://angular.io/guide/observables-in-angular).
### https://rxjs.de
- [Overview](https://rxjs.dev/guide/overview)



