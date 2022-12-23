import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMovie } from 'src/app/models/imovie';
import { IState } from 'src/app/models/istate';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites$!: Observable<IMovie[]>

  constructor(private store: Store<IState>) {
    this.favorites$ = store.select((state: IState) => state.favorites)
   }

  ngOnInit(): void { }
   //fazer *ngFor="let movie of movies$ | async"> quando for montar/renderizar os favorites
}
