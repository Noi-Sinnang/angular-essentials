import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor'; // it is not working with protractor

@Component({
  selector: 'app-user',
  template: `
  <!-- <input type = "text" [(ngModel)]="name"> -->
  <input type = "text" (input)="onUserInput($event)" [value]="name">
  <hr style="margin-top: 50px;">

  <h2>Helloooo..{{ name }} again!</h2>
  <p>from user.component.ts</p>
  <p>I am having fun learning Angular</p>
  `
})

export class UserComponent {
  @Input() name;
  @Output() nameChanged = new EventEmitter<string>();
  // can be any name we want -- use new keyword to creat new instence of EventEmitter class

  onUserInput(event) {
    // this.name = event.target.value;
    this.nameChanged.emit(event.target.value);
  }
}
