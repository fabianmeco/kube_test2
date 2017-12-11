import { Component, OnInit, EventEmitter, Input, Output, ViewChild, Renderer, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'selenium-webdriver';
import { FormGroup } from '@angular/forms/src/model';


@Component({
  selector: 'app-create-assist',
  templateUrl: './create-assist.component.html',
  styleUrls: ['./create-assist.component.css']
})
export class CreateAssistComponent implements OnInit {
  

  user: User = <User> {}

  message:string;
  alertType:string;
  alertopen:boolean = true;

  errors:object = {
  }

  @Input() hideForm:boolean;
  @Output() onHideForm = new EventEmitter<boolean>();

 /*  @ViewChild('name') nameid;
  @ViewChild('email') emailid;
  @ViewChild('cid') cidid;
  @ViewChild('address') addressid; */

  constructor(private http: HttpClient, private renderer: Renderer) { }

  ngOnInit() {
    
  }

  onSaveUser() {
    this.errors = {};
    this.http.post('http://localhost:3000/assistant', { name: this.user.name, cid: this.user.cid, address: this.user.address, email: this.user.email })
      .subscribe(
      res => {
        this.onHideForm.emit(!this.hideForm);
        this.message="Ticket registered successfully"
        this.alertType='success';
        this.alertopen=false;
      }, err => {        
        this.alertType='danger';
        this.alertopen=false;
        err.error.forEach(element => {
          this.message+=element.message+'\n';
          this.errors[element.name] = true;
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
