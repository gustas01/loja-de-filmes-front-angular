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
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    title: 'Finalizar a compra'
  },
  {
    path: 'loginsignup',
    component: LoginSignupComponent,
    title: 'Login - Criar conta'
  },
  {
    path: 'details/:id',
    component: MovieDetailsComponent,
    title: 'Detalhes do filme'
  },
  {
    path: 'update',
    component: UpdateComponent,
    title: 'Dados da sua conta'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Endereço não encontrado'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
