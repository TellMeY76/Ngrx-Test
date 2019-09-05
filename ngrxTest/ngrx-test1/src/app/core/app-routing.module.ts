import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '../pages/home/home.component';
import {CreateComponent} from '../pages/create/create.component';
import {CompleteComponent} from '../pages/complete/complete.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
},
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'complete',
    component: CompleteComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
