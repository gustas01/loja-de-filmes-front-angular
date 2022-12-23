import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs'
import { IMovie } from 'src/app/models/imovie';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart$!: Observable<IMovie[]>

  constructor(private store: Store<IMovie[]>) {
    this.shoppingCart$ = store.select((shoppingCart: IMovie[]) => shoppingCart)
   }

  ngOnInit(): void {
    this.shoppingCart$.subscribe({
      next: res => {
        console.log(res)
        
      }
    })
  }

}
