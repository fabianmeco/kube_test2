import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'EventsApp';
  hideForm:boolean = true;
  successMessage:string;
  showSuccessMessage:boolean=true;

  onHideForm(hide:boolean){
    this.hideForm = hide;
  }
  onSuccessMessage(value:boolean){
    this.successMessage = 'Assistant registered successfuly';
    this.showSuccessMessage = value;
  }
  showMessageClose(value:boolean){
    this.showSuccessMessage = value;
  }
}
