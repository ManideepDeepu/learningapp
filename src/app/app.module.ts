import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AdminformComponent } from './adminform/adminform.component';
import { appRouterModule } from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    AdminformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    appRouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
