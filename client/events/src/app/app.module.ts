import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { CreateAssistComponent } from './create-assist/create-assist.component';
import { FilterComponent } from './filter/filter.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreateFilterWrapComponent } from './create-filter-wrap/create-filter-wrap.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    CreateAssistComponent,
    FilterComponent,
    CreateEventComponent,
    CreateFilterWrapComponent,
    PageNotFoundComponent    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
