import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './components/list/list.component';

import { IssueService } from './issue.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  //{ path: 'list', component: ListComponent},
  {
    path: 'diveSites',
    component: ListComponent,
    data: { title: 'Product Details' }
  },
  { path: '', redirectTo: '/diveSites/', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
