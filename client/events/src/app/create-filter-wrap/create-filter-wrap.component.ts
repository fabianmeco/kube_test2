import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-filter-wrap',
  templateUrl: './create-filter-wrap.component.html',
  styleUrls: ['./create-filter-wrap.component.less']
})
export class CreateFilterWrapComponent implements OnInit {
  hideForm:boolean = true;
  successMessage:string;
  showSuccessMessage:boolean=false;

  constructor() { }

  ngOnInit() {
  }
  
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
