import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogedIn } from '../guards/loged-in.guard';
import { NotLogedInGuard } from '../guards/not-loged-in.guard';
import { CheckoutComponent } from './checkout/checkout.component';

//components
import { HomeComponent } from './home/home.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Finalizar a compra',
    canActivate: [NotLogedInGuard]
  },
  {
    path: 'loginsignup',
    component: LoginSignupComponent,
    title: 'Login - Criar conta',
    canActivate: [LogedIn]
  },
  {
    path: 'details/:id',
    component: MovieDetailsComponent,
    title: 'Detalhes do filme'
  },
  {
    path: 'update',
    component: UpdateComponent,
    title: 'Dados da sua conta',
    canActivate: [NotLogedInGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
