import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
//RxJS comes bundled with Angular when we install it, but we still have to include it in the component where
// we want to use it.
import { from, Observable, of, Subscription } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  title = 'Observables';

  _subscribeCheckbox =  new FormControl('');
  _subscribeCheckboxError =  new FormControl('');
  _observableInfo : any[] = [];
  checked : boolean = false;
  subscription: Subscription;
  
  /* 1. Beispiel */
  myObservable$ = new Observable((observer) => {
/*
    observer.next('1');
    observer.next('2');
    //observer.error('Oops, something went wrong there');
    observer.next('3');
    observer.complete();
*/

    setTimeout(()=> observer.next('1'), 1000);
    setTimeout(()=> observer.next('2'), 2000);
    if(this._subscribeCheckboxError.value) {
      setTimeout(()=> observer.error('Oops, something went wrong there'), 3000);
    }
    setTimeout(()=> observer.next('3'), 4000);
    setTimeout(()=> observer.complete(), 5000);

  });

  ngOnInit(): void {
    this._subscribeCheckbox.valueChanges.subscribe(() => {
      this.checked = !this.checked;
      this.onSubscribe(this.checked);
    });

  /* [Bsp. obsOf1]
   const source1 = of(1, 2, 3, 4, 5);
   const obsOf1 = source1.subscribe(val => console.log(val));
   */
  /* [Bsp. obsOf2] 
   const source2 = of({ name: 'Angular' }, [1, 2, 3], 4, 5 ,6);
   const obsOf2 = source2.subscribe(val => console.log(val));
  */
  /* [Bsp. obsFrom]
   //const obsFrom = from(new Promise(resolve => resolve('Hello World!')));
   //const obsFrom = from([1, 2, 3, 4, 5]);
   const obsFrom = from('Hello World');
   const subscribe = obsFrom.subscribe(val => console.log(val));
  */
  /* [Bsp. obsPipe]
   const source1 = of(1, 2, 3, 4, 5).pipe();
   const obsPipe = source1.subscribe(val => console.log(val));
  */
  /* [Bsp. obsPipeTap]
   const source1 = of(1, 2, 3, 4, 5)
    .pipe(
      tap(el => console.log('Tap - output:' + el))
    );
   const obsPipe = source1.subscribe(val => console.log(val));
  */
  /* [Bsp. obsPipeTapFilter]
   const source1 = of(1, 2, 3, 4, 5)
    .pipe(
      tap(el => console.log('Tap - output:' + el)),
      filter(el => el > 2)
    );
   const obsPipeFilter = source1.subscribe(val => console.log(val));
   */
   /* [Bsp. obsPipeTapFilterMap]
   const source1 = of(1, 2, 3, 4, 5)
    .pipe(
      tap(el => console.log('Tap - output:' + el)),
      filter(el => el > 2),
      map(el => el * 2));
   const obsPipeTapFilterMap = source1.subscribe(val => console.log(val));
   */
  }

  onSubscribe(value: any) {
    if (value){
      console.log('subscribe the Observable');
      this.subscription = this.myObservable$.subscribe({
        next: (next) => this._observableInfo.push('Elemente des Datenstroms:' + next), //next callback
        error: (error) => this._observableInfo.push('Fehlermeldung:' + error), //error callback
        complete: () => this._observableInfo.push('Datenstrom wurde abgearbeitet!') //complete callback
      });
    } else {
      console.log('unsubscribe the Observable');
      this._observableInfo = [];
      this.subscription.unsubscribe();
    }
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
