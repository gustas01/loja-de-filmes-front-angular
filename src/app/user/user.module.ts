import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';

import {MatToolbarModule} from '@angular/material/toolbar';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FavoritesComponent } from './components/favorites/favorites.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule
  ],
  exports: [FavoritesComponent]
})
export class UserModule { }
