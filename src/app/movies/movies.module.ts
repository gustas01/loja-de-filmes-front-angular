import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MoviesRoutingModule } from './movies-routing.module';
import { MatDialogModule } from '@angular/material/dialog';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CardComponent } from './components/card/card.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    CardComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    NgbModule,
    MatDialogModule
  ],
  exports: [CardComponent, CarouselComponent]
})
export class MoviesModule { }
