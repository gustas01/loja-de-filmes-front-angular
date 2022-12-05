import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';

//components
import { HomeComponent } from './home/home.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'loginsignup',
    component: LoginSignupComponent
  },
  {
    path: 'details',
    component: MovieDetailsComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
