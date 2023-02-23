import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './page-two/details/details.component';
import { PageTwoComponent } from './page-two/page-two.component';

const routes: Routes = [
  {
    path:'details',
    component:PageTwoComponent
  },
  {
    path:'details/:id',
    component:DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page2RoutingModule { }
