import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayRespComponent } from './display-resp/display-resp.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { ApmErrorHandler } from '@elastic/apm-rum-angular';
import { ApmModule, ApmService } from '@elastic/apm-rum-angular'
import { AppsettingsService } from './appsettings.service';
import { SydneyComponent } from './sydney/sydney.component';
import { PerthComponent } from './perth/perth.component';
import { AdelaideComponent } from './adelaide/adelaide.component';


@NgModule({
  declarations: [
    DisplayRespComponent,
    SydneyComponent,
    PerthComponent,
    AdelaideComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApmModule
  ],
  providers: [ApmService, {provide: ErrorHandler,
    useClass: ApmErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    appsvc: AppsettingsService
  ) {
    appsvc.initApm();
  }
}
