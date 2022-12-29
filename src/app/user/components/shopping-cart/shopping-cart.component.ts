import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs'
import { ImovieFormatDatabase } from 'src/app/models/imovie-format-database';
import { IState } from 'src/app/models/istate';
import { NotificationService } from 'src/app/services/notification.service';
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
  totalPrice: number = 0

  constructor(private store: Store<IState>, private userService: UserService, private notificationService: NotificationService) {
    this.shoppingCart$ = store.select((state: IState) => state.shoppingCart)
   }

  ngOnInit(): void {
    this.calculatedPrice()
   }


  removeFromCart(id: number){
    this.store.dispatch(RemoveFromCart({id}))
    this.shoppingCart$.subscribe({
      next: res => this.userService.setShoppingCart(res).subscribe()
    })
  }


  notifyCloseCart(){
    this.notificationService.closeCart(false)
  }


  calculatedPrice(){
    this.shoppingCart$.subscribe({
      next: res => {
        this.totalPrice = res.map(el => el.price).reduce((el1, el2) => el1 + el2, 0)
      }
    })
  }
}
