import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayRespComponent } from './display-resp/display-resp.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { SydneyComponent } from './sydney/sydney.component';
import { PerthComponent } from './perth/perth.component';
import { AdelaideComponent } from './adelaide/adelaide.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayRespComponent,
    SydneyComponent,
    PerthComponent,
    AdelaideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
