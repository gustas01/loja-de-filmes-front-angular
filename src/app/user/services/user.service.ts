import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
import { ITokenPayload } from 'src/app/models/i-token-payload';
import { IMovie } from 'src/app/models/imovie';
import { ClearCart } from 'src/app/store/actions/shoppingCart.actions';
import { Store } from '@ngrx/store';
import { ClearFavorites } from 'src/app/store/actions/favorites.actions';
import { ImovieFormatDatabase } from 'src/app/models/imovie-format-database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public changeCookieEmitter = new EventEmitter<{token: string}>()
  private expiration: string = ''
  private headers = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json"
    })
  }


  constructor(private http: HttpClient, private snackBar: MatSnackBar, private router: Router, private store: Store) { }

  login(user: any): Observable<{token: string}>{
    return this.http.post<{token: string}>(`${environment.baseUrl}/tokens`, user, this.headers).pipe(
      tap(res => {
        if (user.rememberMe === true)
          this.expiration = `Expires=${new Date(this.decodeToken(res.token).exp*1000).toUTCString()}`
        else
          this.expiration = ''
          
        //salvando token nos cookies
        document.cookie = `token = ${res.token};${this.expiration}`
        
        this.changeCookieEmitter.emit(res)
      }),
      catchError(err => {
        this.showMessage(err.error['errors'].join(), true)
        return of()
      })
    )
  }

  signUp(user: any): Observable<any>{
    return this.http.post<any>(`${environment.baseUrl}/users`, user, this.headers).pipe(
      tap(res => res),
      catchError( err => {
        this.showMessage(err.error['errors'].join(), true)
        return of()
      })
    )
  }

  logout(){
    document.cookie = 'token=;Expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;'
    this.changeCookieEmitter.emit({token: ''})
    this.store.dispatch(ClearCart())
    this.store.dispatch(ClearFavorites())
    this.router.navigate([''])
  }

  showMessage(msg: string, isError: boolean = false){
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
     })
  }

  getCookie(cookieName: string): string {
    let cookies: any = {};
    
    document.cookie.split(';').forEach(function(el) {
      let [key,value] = el.split('=');
      cookies[key.trim()] = value;
    })

    return cookies[cookieName];
  }

  decodeToken(token: string): ITokenPayload{    
    return jwt_decode(token)
  }

  verifyExpiredToken(token: string): boolean{
    const decoded = this.decodeToken(token)

    if(decoded.exp <= Math.floor(Date.now() / 1000))
      return true

    return false
  }

  getShoppingCart(): Observable<ImovieFormatDatabase[]>{
    const headers = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${this.getCookie('token')}`,
      })
    }

    return this.http.get<ImovieFormatDatabase[]>(`${environment.baseUrl}/shoppingCart`, headers)
  }

  getFavorites(): Observable<ImovieFormatDatabase[]>{
    const headers = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${this.getCookie('token')}`,
      })
    }
    
    return this.http.get<ImovieFormatDatabase[]>(`${environment.baseUrl}/favorites`, headers)
  }

  setShoppingCart(shoppingCart: ImovieFormatDatabase[]){
    const headers = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${this.getCookie('token')}`,
      })
    }

    return this.http.put(`${environment.baseUrl}/shoppingCart`, shoppingCart, headers)
  }


  setFavorites(favorites: ImovieFormatDatabase[]){
    const headers = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${this.getCookie('token')}`,
      })
    }

    return this.http.put(`${environment.baseUrl}/favorites`, favorites, headers)
  }
}
