import { Component, OnDestroy, OnInit } from '@angular/core';
//RxJS comes bundled with Angular when we install it, but we still have to include it in the component where
// we want to use it.
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Observables';

  /*
  * Definition eines OS via Konstruktor. Als Callback definieren wir einen
  * observer der 5 Werte zurück liefern kann.
  */
  myObservable$ = new Observable((observer) => {
    console.log('Starting observable');

    observer.next('1');
    observer.next('2');
    observer.next('3');
    observer.next('4');
    observer.next('5');
  });

  ngOnInit(): void {
    this.myObservable$.subscribe(res => {
      console.log('Result:', res);
    });
  }

  ngOnDestroy(): void {
    //this.myObservable$.u
  }

}
