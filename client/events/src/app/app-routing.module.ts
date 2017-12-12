import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import {CreateAssistComponent} from './create-assist/create-assist.component';
import {CreateFilterWrapComponent} from './create-filter-wrap/create-filter-wrap.component';
import { CreateEventComponent } from './create-event/create-event.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routesForEvent: Routes = [
    {path:'create-user', component:CreateFilterWrapComponent},
    {path: 'create-event', component: CreateEventComponent},
    { path: '',   redirectTo: '/create-user', pathMatch: 'full' },
    {path: '**', component: PageNotFoundComponent}
  ];

  @NgModule({
      imports:[
        RouterModule.forRoot(routesForEvent)
      ], 
      exports:[
          RouterModule
      ]
  })
  export class AppRoutingModule{}