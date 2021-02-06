import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'time-line',
    pathMatch: 'full'
  },
  {
    path: 'time-line', loadChildren: () => import('./pages/time-line/time-line.module').then(m => m.TimeLineModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
