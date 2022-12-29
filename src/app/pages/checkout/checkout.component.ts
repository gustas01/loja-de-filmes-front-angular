import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ImovieFormatDatabase } from 'src/app/models/imovie-format-database';
import { IState } from 'src/app/models/istate';
import { RemoveFromCart } from 'src/app/store/actions/shoppingCart.actions';
import { UserService } from 'src/app/user/services/user.service';
import constants from 'src/app/utils/contansts';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  shoppingCart$!: Observable<ImovieFormatDatabase[]>
  baseUrl = constants.baseURLImagesW45

  personalData = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    fone: ['', [Validators.required, Validators.minLength(8)]]
  });
  address = this._formBuilder.group({
    cep: ['', [Validators.required]],
    numberOfHouse: ['', [Validators.required]],
  });
  creditCardDetails = this._formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    numberOfCard: ['', Validators.required, Validators.minLength(16), Validators.maxLength(16)],
    cvv: ['', Validators.required, Validators.minLength(3), Validators.maxLength(3)]
  });


  constructor(private _formBuilder: FormBuilder, private store: Store<IState>, private userService: UserService) {
    this.shoppingCart$ = store.select((state: IState) => state.shoppingCart)
   }

  ngOnInit(): void {
  }


  removeFromCart(id: number){
    this.store.dispatch(RemoveFromCart({id}))
    this.shoppingCart$.subscribe({
      next: res => this.userService.setShoppingCart(res).subscribe()
    })
  }

  
  checkout(){
    
  }

}
