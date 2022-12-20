import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public openFavorites: boolean = false
  public openShoppingCart: boolean = false


  constructor() { }

  ngOnInit(): void {
    // if(this.getCookie('token'))
     //pegar token
    
  }

  getCookie(cookieName: string) {
    let cookies: any = {};
    
    document.cookie.split(';').forEach(function(el) {
      let [key,value] = el.split('=');
      cookies[key.trim()] = value;
    })
    
    return cookies[cookieName];
    
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
