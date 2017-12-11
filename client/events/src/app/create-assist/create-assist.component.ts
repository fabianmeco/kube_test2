import { Component, OnInit, EventEmitter, Input, Output, ViewChild, Renderer, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'selenium-webdriver';
import { FormGroup } from '@angular/forms/src/model';


@Component({
  selector: 'app-create-assist',
  templateUrl: './create-assist.component.html',
  styleUrls: ['./create-assist.component.less']
})
export class CreateAssistComponent implements OnInit {
  

  user: User = <User> {}
  errors: Object = {}
  message:string;
  alertType:string;
  alertopen:boolean = true;

  @Input() hideForm:boolean;
  @Output() onHideForm = new EventEmitter<boolean>();
  @Output() onSuccessMessage = new EventEmitter<boolean>();
  @ViewChild("createForm") form;
 
  constructor(private http: HttpClient, private renderer: Renderer) { }

  ngOnInit() {
    
  }

  onSaveUser() {
    this.http.post('http://localhost:3000/assistant', { name: this.user.name, cid: this.user.cid, address: this.user.address, email: this.user.email })
      .subscribe(
      res => {
        this.onHideForm.emit(!this.hideForm);
        
        this.onSuccessMessage.emit(true);
      }, err => { 
        err.error.forEach(element => {
          this.errors[element.name] = element.message;
          this.form.controls[element.name].setErrors({"serverError":true});                    
        });        
        
      })
  }
  onCancelSave(){
    this.onHideForm.emit(!this.hideForm);
  }
  alertClose(){
    this.alertopen=true;
  } 

}
interface User {
  name: string;
  cid: string;
  email: string;
  address: string;
}
