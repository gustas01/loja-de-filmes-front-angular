import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private movieNameSearch = new Subject<string>()
  public movieNameSearchObservable$ = this.movieNameSearch.asObservable()

  private closeCartInCheckout = new Subject<boolean>()
  public closeCartInCheckoutObservable$ = this.closeCartInCheckout.asObservable()

  constructor(private router: Router) { }

  search(movieName: string){
    this.router.navigate([''])
    this.movieNameSearch.next(movieName)
  }

  closeCart(toClose: boolean){
    this.closeCartInCheckout.next(toClose)
  }
}
