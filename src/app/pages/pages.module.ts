import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';

import { CheckoutComponent } from './checkout/checkout.component';

import { UpdateComponent } from './update/update.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MoviesModule } from '../movies/movies.module';


@NgModule({
  declarations: [
    HomeComponent,
    CheckoutComponent,
    UpdateComponent,
    MovieDetailsComponent,
    LoginSignupComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MoviesModule
  ]
})
export class PagesModule { }
