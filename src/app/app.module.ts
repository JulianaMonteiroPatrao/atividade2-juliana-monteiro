import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { RepeatComponent } from './repeat/repeat.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'conditional', component: ConditionalComponent },
    { path: 'repeat', component: RepeatComponent },
  ]
  ) ],
  declarations: [ AppComponent, NavbarComponent, HomeComponent, ConditionalComponent, RepeatComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
