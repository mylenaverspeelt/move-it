import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { PrimaryInputComponent } from './components/primary-input/primary-input.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    LoginComponent,
    PrimaryInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
