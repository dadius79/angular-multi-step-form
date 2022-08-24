import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TemplateOneComponent } from './template-one/template-one.component';
import { StepperOneComponent } from './stepper-one/stepper-one.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: StepperOneComponent },
  { path: 'dynamic-form-one', component: TemplateOneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
