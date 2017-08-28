import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.route';
import { Question1Component } from './question1/question1.component';
import { RippleDirective } from 'angular-ripple-effect/ripple.directive';
import { ResutComponent } from './resut/resut.component';
import { GoogleChart } from './cart.directive';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Question1Component,
    GoogleChart,
    RippleDirective,
    ResutComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
