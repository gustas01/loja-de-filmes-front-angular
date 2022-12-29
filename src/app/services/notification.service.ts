import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private movieNameSearch = new Subject<string>()
  public movieNameSearchObservable$ = this.movieNameSearch.asObservable()

  private closeCartInCheckout = new Subject<boolean>()
  public closeCartInCheckoutObservable$ = this.closeCartInCheckout.asObservable()

  constructor() { }

  search(movieName: string){
    this.movieNameSearch.next(movieName)
  }

  closeCart(toClose: boolean){
    this.closeCartInCheckout.next(toClose)
  }
}
