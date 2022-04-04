import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SydneyComponent } from './sydney/sydney.component';
import { PerthComponent } from './perth/perth.component';
import { AdelaideComponent } from './adelaide/adelaide.component';
const routes: Routes = [
  {path: 'sydney', component: SydneyComponent},
  {path: 'perth', component: PerthComponent},
  {path: 'adelaide', component: AdelaideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
