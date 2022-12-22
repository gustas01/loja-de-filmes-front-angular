import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UserModule } from './user/user.module';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { StoreModule } from '@ngrx/store';
import { shoppingCartReducer } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatSidenavModule,
    UserModule,
    MatTabsModule,
    NgbModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    StoreModule.forRoot({shoppingCart: shoppingCartReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
