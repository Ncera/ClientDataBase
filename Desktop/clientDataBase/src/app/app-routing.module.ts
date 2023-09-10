import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TableDataComponent } from './table-data/table-data.component';

const routes: Routes = [

  {
    path:"",pathMatch:"full",component:AppComponent
    
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"table-data",component:TableDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
