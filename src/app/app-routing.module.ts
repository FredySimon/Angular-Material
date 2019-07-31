import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsControlsComponent } from './components/forms-controls/forms-controls.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {path: '', component: FormsControlsComponent},
  {path: 'formularios', component: FormsControlsComponent},
  {path: 'layout', component: LayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
