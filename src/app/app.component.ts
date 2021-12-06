import { Component, OnDestroy, OnInit } from '@angular/core';
//RxJS comes bundled with Angular when we install it, but we still have to include it in the component where
// we want to use it.
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Observables';

  /* 1. Beispiel */
  myObservable$ = new Observable((observer) => {
    observer.next('1');
    observer.next('2');
    observer.next('3');
    observer.error('Oops, something went wrong there');
    observer.complete();
  });

  ngOnInit(): void {
    this.myObservable$.subscribe(
      res => { console.log('Elemente des Datenstroms:', res); }, //next callback
      (error) => { console.log('Fehlermeldung:', error); }, //error callback
      () => { console.log('Datenstrom wurde abgearbeitet'); //complete callback
    });
  }

}
