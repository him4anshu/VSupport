import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'goToRegister', redirectTo: 'register', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent,canActivate:[AuthGaurdService] },
  { path: 'employees/add', component: CreateEmployeeComponent, canActivate:[AuthGaurdService] },
  { path: 'update/:id', component: UpdateEmployeeComponent,canActivate:[AuthGaurdService] },
  { path: 'details/:id', component: EmployeeDetailsComponent, canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
