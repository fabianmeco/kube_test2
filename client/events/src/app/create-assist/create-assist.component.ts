import { Component, OnInit, EventEmitter, Input, Output, ViewChild, Renderer, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-assist',
  templateUrl: './create-assist.component.html',
  styleUrls: ['./create-assist.component.css']
})
export class CreateAssistComponent implements OnInit {

  name: string;
  cid: string;
  address: string;
  email: string;
  message:string;
  alertType:string;
  alertopen:boolean = true;

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
    this.http.post('http://localhost:3000/assistant', { name: this.name, cid: this.cid, address: this.address, email: this.email })
      .subscribe(
      res => {
        this.onHideForm.emit(!this.hideForm);
        this.message="Ticket registered successfully"
        this.alertType='success';
        this.alertopen=false;
      }, err => {
        this.message=err.error.message;
        this.alertType='danger';
        this.alertopen=false;
        /* switch(err.error.name){
          case 'name':
            this.nameid.nativeElement.classList.add('is-invalid');
            break;
          case 'email':
            this.emailid.nativeElement.classList.add('is-invalid');
            break;
          case 'address':
          this.addressid.nativeElement.classList.add('is-invalid');
            break;
          case 'cid':
          this.cidid.nativeElement.classList.add('is-invalid');
            break;
        } */
      })
  }
  onCancelSave(){
    this.onHideForm.emit(!this.hideForm);
  }

}
interface user {
  name: string;
  cid: string;
  email: string;
  address: string;
}
