import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component'
import { AdminformComponent } from './adminform/adminform.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginpageComponent,
  },

  {
    path: 'login/details',
    component: AdminformComponent,
  },
  
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

export const appRouterModule = RouterModule.forRoot(routes);
