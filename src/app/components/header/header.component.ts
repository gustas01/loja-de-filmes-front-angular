import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public openFavorites: boolean = false
  public openShoppingCart: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  submitNameMovie(form: NgForm ){
    //implementar chamanda na API que busca filme por nome
    // console.log(form.value.moviename);
  }

  toggleFavoritesNav(){
    if(this.openShoppingCart) this.openShoppingCart = false
    this.openFavorites = !this.openFavorites
  }

  toggleShoppingCartNav(){
    if(this.openFavorites) this.openFavorites = false
    this.openShoppingCart = !this.openShoppingCart
  }

}
