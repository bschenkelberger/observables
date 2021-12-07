# Observables

Observables sind kein Angular-spezifisches Feature, sondern ein Standard für die Verwaltung und das Handling mit asynchroner Daten (der in der ES7(ECMAScript 2016)-Version festgelegt wurde)
Observables selbst sind ein integraler Bestandteil des `Reactive Programming`

## Reactive Programming
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
  Eine Verwendung in Angular findet man zum Beispiel in:
  - Value Changes / Status Changes in Angular Forms
  - Die Module Router und Forms verwenden Observables, um auf Benutzereingabeereignisse zu reagieren.
  - Das HTTP-Modul verwendet Observables, um AJAX-Anfragen und -Antworten zu verarbeiten.
  - Sie können benutzerdefinierte Ereignisse definieren, die Ausgabedaten von einem child an eine parent Komponente senden
  - .....

Observables verwenden das Publish-and-Subscribe-Modell.
Eine Observable-Methode (Publisher) wird erst dann ausgeführt und gibt Daten aus, wenn ein Beobachter (Subscriber) sie abonniert hat. Die Kommunikation zwischen dem Observable und dem Observer erfolgt über drei Callbacks.

```
next() // Erfolgsfall - erhält die Daten
error() // Fehlerfall - erhält Informationen über den Fehler bzw. das Fehlerobjekt
complete() // Abschluss 
```
Alle drei Funktionen sind optinal.

```typescript
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
```typescript
  myObservable.subscribt()
```
Es ist möglich durch Aufruf der `unsubscribt` Funktion, den Datenstrom abzubestellen
```typescript
  myObservable.unsubscribt()
```
*Schauen wir uns das Beispiel am offenen Herzen an. Starte die Anwendunf `ng serve --open`*

## Weitere nützliche Hilfsfunktion aus dem RxJS Universum
Wie wir gerade gesehen haben, haben wir das Oberservable über den Konstruktor erzeugt. `RxJS` bietet jedoch eine vielzahl von Hilfreichen Funktionen.
Die zwei bekanntesten sollten `of` und `from` sein.

1. `of` [RxJS - of](https://rxjs.dev/api/index/function/of)
- Eine Zahlenfolge ausgeben
  ```typescript
  import { of } from 'rxjs';
  ...
  const source = of(1, 2, 3, 4, 5);
  const obsOf1 = source.subscribe(val => console.log(val));
  ```
  Siehe `[Bsp. obsOf1]` in appComponent.ts

- Mehrere Eingabeobjekte 
  ```typescript
    import { of } from 'rxjs';
    ...
    const source2 = of({ name: 'Angular' }, [1, 2, 3], 4, 5 ,6);
    const obsOf2 = source2.subscribe(val => console.log(val));
  ```
  Siehe `[Bsp. obsOf2]` in appComponent.ts
2. `from` [RXJS - from](https://rxjs.dev/api/index/function/from)
- Dieser Operator kann verwendet werden, um ein Promise in ein Observable umzuwandeln!
- Bei Arrays und Iterables werden alle enthaltenen Werte als Sequenz ausgegeben!
- Dieser Operator kann auch verwendet werden, um einen String als Zeichenfolge auszugeben!
  ```typescript
  import { from } from 'rxjs';
  ...
  //const source = from(new Promise(resolve => resolve('Hello World!')));
  //const source = from([1, 2, 3, 4, 5]);
  //const source = from('Hello World');
  const subscribe = source.subscribe(val => console.log(val));
  ```
  Siehe `[Bsp. obsFrom]` in appComponent.ts

  ### of vs from
  | Of      | from |
  | ----------- | ----------- |
  | Akzeptiert Variable Anzahl Argumente      | Akzeptiert nur ein Argument       |
  | gibt jedes Argument so aus wie es ist, ohne etwas zu ändern   | iteriert über das Argument und gibt jeden Wert aus        |

 


```typescript

```

## Links
### https://angular.io/
- [observables overview](https://angular.io/guide/observables).
- [The RxJS library](https://angular.io/guide/rx-library#the-rxjs-library).
- [Observables in Angular](https://angular.io/guide/observables-in-angular).
### https://rxjs.de
- [Overview](https://rxjs.dev/guide/overview)



