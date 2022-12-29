import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';


import { PagesRoutingModule } from './pages-routing.module';
import { MoviesModule } from '../movies/movies.module';
import { UserModule } from '../user/user.module';

import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UpdateComponent } from './update/update.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomeComponent,
    CheckoutComponent,
    UpdateComponent,
    MovieDetailsComponent,
    LoginSignupComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MoviesModule,
    UserModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonModule,
    NgbModule,
    MatPaginatorModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class PagesModule { }
