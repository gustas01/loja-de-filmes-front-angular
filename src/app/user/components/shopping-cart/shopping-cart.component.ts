import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs'
import { ImovieFormatDatabase } from 'src/app/models/imovie-format-database';
import { IState } from 'src/app/models/istate';
import { RemoveFromCart } from 'src/app/store/actions/shoppingCart.actions';
import constants from 'src/app/utils/contansts';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart$!: Observable<ImovieFormatDatabase[]>
  baseUrl = constants.baseURLImagesW45

  constructor(private store: Store<IState>, private userService: UserService) {
    this.shoppingCart$ = store.select((state: IState) => state.shoppingCart)
   }

  ngOnInit(): void { }


  removeFromCart(id: number){
    this.store.dispatch(RemoveFromCart({id}))
    this.shoppingCart$.subscribe({
      next: res => this.userService.setShoppingCart(res).subscribe()
    })
  }
}
