import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';

const appRoutes:Routes= [
  {path:'',  component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},

]

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, AboutComponent, ContactComponent, HomeComponent ],
  bootstrap:    [ AppComponent, AboutComponent, ContactComponent, HomeComponent ]
})
export class AppModule { }
