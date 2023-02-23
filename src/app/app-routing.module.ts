import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'form',
    component:HomeComponent
  },
  {
    path:'page2',
    loadChildren:()=>import('./page2/page2.module').then(m=>m.Page2Module)
  },
  {
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
