import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { PagesRoutingModule } from './pages-routing.module';
import { MoviesModule } from '../movies/movies.module';
import { UserModule } from '../user/user.module';

import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UpdateComponent } from './update/update.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
    MoviesModule,
    UserModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class PagesModule { }
