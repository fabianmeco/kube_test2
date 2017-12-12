import { Component, OnInit, EventEmitter, Input, Output, ViewChild, Renderer, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'selenium-webdriver';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.less']
})
export class CreateEventComponent implements OnInit {
  event: Event = <Event>{}
  alertopen:boolean = true;
  errors:Object={};
  @ViewChild("createForm") form;
  
  constructor(private http: HttpClient, private renderer: Renderer) { }

  ngOnInit() {
  }
  onSaveEvent() {
    this.http.post('http://localhost:3000/event', { name: this.event.name, city: this.event.city, date: this.event.date })
      .subscribe(
      res => {
        
      }, err => { 
        err.error.forEach(element => {
          this.errors[element.name] = element.message;
          this.form.controls[element.name].setErrors({"serverError":true});                    
        });        
        
      })
  }

}

interface Event{
  name:string;
  city:string;
  date:Date;
}