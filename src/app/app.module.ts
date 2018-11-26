import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';

import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/list/divesite-detail/product-detail.component';

import { IssueService } from './issue.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const diveSiteComponents : Routes = [
  {
    path: 'diveList',
    component: ListComponent,
    data: { title: 'Deep Dive List' }
  },
  {
    path: 'diveSite/:id',
    component: DetailComponent,
    data: { title: 'Product Details' }
  },
  {
    path: 'diveShop/:id',
    component: DetailComponent,
    data: { title: 'Product Details' }
  },
  {
    path: 'trip/:id',
    component: DetailComponent,
    data: { title: 'Product Details' }
  }
];
const appRoutes: Routes = [


  {
    path: 'diveSite/:id', //'divesite-detail/:id',
    component: DetailComponent,  
    children: diveSiteComponents // the '' path will load UserComponent
  },
  {
    path: 'diveShop/:id', //'divesite-detail/:id',
    component: DetailComponent,  
    children: diveSiteComponents // the '' path will load UserComponent
  }
  ,
  {
    path: 'trip/:id', //'divesite-detail/:id',
    component: DetailComponent,  
    children: diveSiteComponents // the '' path will load UserComponent
  }
/*
  {
    path: 'diveSite/:id', //'divesite-detail/:id',
    component: DetailComponent,  
    redirectTo: 'diveSite/:id',
    pathMatch: 'full'
  }



  {
    path: 'details/:id', //'divesite-detail/:id',
    component: ParentComponent,  
    children: diveSiteComponents // the '' path will load UserComponent
  }
  ,
  {
    path: 'diveSite/:id', //'divesite-detail/:id',
    component: DetailComponent,  
    children: diveSiteComponents // the '' path will load UserComponent
  }
  */

];

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}), // , {useHash: true}),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
