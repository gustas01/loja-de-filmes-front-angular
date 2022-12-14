import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SuccessDialogComponent } from 'src/app/components/success-dialog/success-dialog.component';
import { ImovieFormatDatabase } from 'src/app/models/imovie-format-database';
import { IState } from 'src/app/models/istate';
import { ClearCart, RemoveFromCart } from 'src/app/store/actions/shoppingCart.actions';
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
  totalPrice: number = 0

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


  constructor(private _formBuilder: FormBuilder, private store: Store<IState>, private userService: UserService, public dialog: MatDialog, private router: Router) {
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

  
  checkout(){
    this.userService.setShoppingCart([]).subscribe({
      next: () => {
        this.store.dispatch(ClearCart())
        this.router.navigate([''])
        this.dialog.open(SuccessDialogComponent, {
          data: {titleMsg: 'Sucesso!', bodyMsg: 'Compra finalizada com sucesso!'}
        })
      },
      error: () => {
        this.dialog.open(SuccessDialogComponent, {
          data: {titleMsg: 'Erro!', bodyMsg: 'Falha ao finalizar compra!'}
        })
      }
    })
  }

  calculatedPrice(){
    this.shoppingCart$.subscribe({
      next: res => {
        this.totalPrice = res.map(el => el.price).reduce((el1, el2) => el1 + el2, 0)
      }
    })
  }

}
