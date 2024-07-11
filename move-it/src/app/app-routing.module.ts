import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'signup',
    component: SignUpComponent
  }, {
    path: 'userpage',
    component: UserPageComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
