import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule ,HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { app_routing } from './app.routing';
import{IndexComponent} from './index';






@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,JsonpModule, app_routing.routes ,HttpModule],

  declarations: [ AppComponent, app_routing.components,IndexComponent],

  providers:[],

  bootstrap:    [ AppComponent ]
})
export class AppModule { } 