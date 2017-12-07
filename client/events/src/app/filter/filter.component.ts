import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filterEvents : event;
  filterUsers : user;
  user_id:number;
  event_id:number;
  seat:string;
  message:string;
  alertopen:boolean=true;
  alertType:string;
  //Define when create ticket button is hidden or not
  hiddenCreateTicket: boolean=false;
  changedUser: boolean = false;
  changedEvent: boolean = false;
  // Defines when the create user form is hidden or not
  @Input() hideForm:boolean;
  @Output() onHideForm = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<event>('http://localhost:3000/event').subscribe(
      data=> {this.filterEvents = data;}
    );
    this.http.get<user>('http://localhost:3000/assistant').subscribe(
      data=> {this.filterUsers = data;}
    );
  }
  //Method to hide or show the create assistant form
  onClickForm(){
    this.onHideForm.emit(!this.hideForm);
  }
  //Method to hide or show create ticket button
  onChangeUser(){
    this.changedUser=true;
    if(this.changedUser&&this.changedEvent){
      this.hiddenCreateTicket=true;
    }
  }
  onChangeEvent(){
    this.changedEvent=true;
    if(this.changedUser&&this.changedEvent){
      this.hiddenCreateTicket=true;
    }
  }

  onKeyEvent(event:any){
    this.http.get<event>('http://localhost:3000/event?request='+event.target.value).subscribe(
      data=> {this.filterEvents = data;}
    );
  }
  onKeyUser(event:any){
    this.http.get<user>('http://localhost:3000/assistant?request='+event.target.value).subscribe(
      data=> {this.filterUsers = data;}
    );
  }

  onClickCreateTicket(){    
    this.http.post('http://localhost:3000/event/'+this.event_id+"/assistant/", {seat:this.seat, assistant_id:this.user_id})
    .subscribe(
    res => {
      this.message="Ticket registered successfully"
      this.alertType='success';
      this.alertopen=false;
      this.hiddenCreateTicket=false;
    }, err => {
      this.message=err.error.message;
      this.alertType='danger';
      this.alertopen=false;
    })
  }
  alertClose(){
    this.alertopen=true;
  }       

  }
  
interface event{
  id:number;
  name:string;
  city:string;
  date: Date;
}

interface user{
  id:number;
  name:string;
  cid:string;
  photo:string;
  email:string;
  address:string;
}
