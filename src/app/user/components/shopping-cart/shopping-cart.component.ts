import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs'
import { IMovie } from 'src/app/models/imovie';
import { IState } from 'src/app/models/istate';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart$!: Observable<IMovie[]>

  constructor(private store: Store<IState>) {
    this.shoppingCart$ = store.select((state: IState) => state.shoppingCart)
   }

  ngOnInit(): void { }
  //fazer *ngFor="let movie of movies$ | async"> quando for montar/renderizar o shoppingCart no html
}
