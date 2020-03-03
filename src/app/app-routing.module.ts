import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeesComponent } from './employees/employees.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  // {path:"",component:EmployeesComponent},
  // {path:'',redirectTo:"/departments" ,pathMatch:"prefix"},//now this will never reach the wildcard route since every url would match path:'' defined.
  {path:'',redirectTo:'/departments',pathMatch:"full"}, // In this case, when app is launched on localhost:4200 (or some server)
  {path:"employees" ,component:EmployeesComponent},
  {path:"departments",component:DepartmentComponent},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[ DepartmentComponent,
  EmployeesComponent,PagenotfoundComponent]