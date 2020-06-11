import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-essentials';
  rootName = 'Maximilian'

  onNameChanged(newName) {
    this.rootName = newName;
  }
}
