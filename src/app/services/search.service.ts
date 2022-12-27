import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private movieNameSearch = new Subject<string>()
  public movieNameSearchObservable$ = this.movieNameSearch.asObservable()

  constructor() { }

  search(movieName: string){
    this.movieNameSearch.next(movieName)
  }
}
