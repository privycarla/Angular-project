import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ExploreComponent } from './explore/explore.component';



const routeConfig: Routes = [
    {
      path: 'home',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'login',
      component: LoginComponent,
      title: 'Login page',
    },
    {
      path: 'signup',
      component: SignupComponent,
      title: 'Signup page',
    },
    {
      path: 'explore',
      component: ExploreComponent,
      title: 'Explore page',
    }

  
  ];
  export default routeConfig;