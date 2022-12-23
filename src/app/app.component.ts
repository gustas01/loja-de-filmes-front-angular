import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TriggerLoadFavorites } from './store/actions/favorites.actions';
import { TriggerLoadShoppingCart } from './store/actions/shoppingCart.actions';
import { UserService } from './user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private store: Store, private userService: UserService){}

  ngOnInit(): void {
    if(this.userService.getCookie('token') && !this.userService.verifyExpiredToken(this.userService.getCookie('token'))){
      this.store.dispatch(TriggerLoadShoppingCart())
      this.store.dispatch(TriggerLoadFavorites())
    }else
      this.userService.logout()
  }

}
