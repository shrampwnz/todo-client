import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
] as Routes;