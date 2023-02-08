import { Component } from '@angular/core';

@Component({
  selector: 'app-defoult',
  templateUrl: './defoult.component.html'
})
export class DefoultComponent {
  classToggled = false;
  openMenu(){
    this.classToggled = !this.classToggled;
  }
}
