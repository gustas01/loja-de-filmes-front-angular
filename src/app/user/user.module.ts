import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    FavoritesComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  exports: [FavoritesComponent, ShoppingCartComponent, LoginComponent, SignupComponent]
})
export class UserModule { }
