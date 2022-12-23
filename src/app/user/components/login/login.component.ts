import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoadFavoritesOnLogin } from 'src/app/store/actions/favorites.actions';
import { LoadShoppingCartOnLogin } from 'src/app/store/actions/shoppingCart.actions';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    rememberMe: [false]
  })

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private store: Store) { }

  ngOnInit(): void { }

  handleLogin(){
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value).subscribe({
        next: () => {
          this.store.dispatch(LoadShoppingCartOnLogin())
          this.store.dispatch(LoadFavoritesOnLogin())

          return this.router.navigate([''])}

      })
    }else this.userService.showMessage('Preencha os campos corretamente', true)
  }

}
