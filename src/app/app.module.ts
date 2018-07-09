import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { appService } from './app.service';
import { HttpModule } from '@angular/http';
import { AllEmpComponent } from './all-emp/all-emp.component';
import { OneEmpComponent } from './one-emp/one-emp.component';

const appRoutes:Routes=[
  {path:'addEmp',component:AddEmpComponent},
  {path:'emp/:id',component:OneEmpComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AddEmpComponent,
    AllEmpComponent,
    OneEmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [appService],
  bootstrap: [AppComponent]
})
export class AppModule { }
