import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ImovieFormatDatabase } from 'src/app/models/imovie-format-database';
import { IState } from 'src/app/models/istate';
import constants from 'src/app/utils/contansts';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites$!: Observable<ImovieFormatDatabase[]>
  baseUrl = constants.baseURLImagesW45

  constructor(private store: Store<IState>) {
    this.favorites$ = store.select((state: IState) => state.favorites)
   }

  ngOnInit(): void { }
}
