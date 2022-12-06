import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { MoviesRoutingModule } from './movies-routing.module';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MatCardModule
  ],
  exports: [CardComponent]
})
export class MoviesModule { }
