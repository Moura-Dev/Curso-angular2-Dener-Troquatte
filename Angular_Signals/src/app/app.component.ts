import { Component, computed, effect, signal } from '@angular/core';
import { UpdateService } from './service/update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public firstName = signal ('Rafael');
  public lastName = signal ('Moura');

  public fullName = computed (() => {
    return this.firstName() + this.lastName();
  });

  public array = signal([1]);

  constructor(public updateService: UpdateService){
    effect(() => {});
  }

  // effect escuta dos eventos. exp com alert:
  /* constructor() {
    effect(() => {
      if (this.array().length > 3){
        alert(123);
      }
    });
  } */

  public updateName() {
    //this.firstName.set('Jhon');  // update é melhor para trabalhar string
    this.firstName.update((oldValue) => {
      return 'Jhon'
    });
  }

  public updateArray() {
    this.array.mutate((oldValue) => {
      return oldValue.push(Number(oldValue.at(-1)) + 1);
    });
  }
}
