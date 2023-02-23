import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page2RoutingModule } from './page2-routing.module';
import { PageTwoComponent } from './page-two/page-two.component';
import { DetailsComponent } from './page-two/details/details.component';
console.log('Page2 Module is loaded')

@NgModule({
  declarations: [
    PageTwoComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    Page2RoutingModule
  ]
})
export class Page2Module { }
