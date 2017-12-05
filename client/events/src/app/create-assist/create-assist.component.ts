import { Component, OnInit } from '@angular/core';
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

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSaveUser() {
    this.http.post('http://localhost:3000/assistant', { name: this.name, cid: this.cid, address: this.address, email: this.email })
      .subscribe(
      res => {
        this.message="Ticket registered successfully"
        this.alertType='success';
        this.alertopen=false;
      }, err => {
        this.message=err.error.message;
        this.alertType='danger';
        this.alertopen=false;
      })
  }

}
interface user {
  name: string;
  cid: string;
  email: string;
  address: string;
}
