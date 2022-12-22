import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITokenPayload } from 'src/app/models/i-token-payload';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public openFavorites: boolean = false
  public openShoppingCart: boolean = false
  public token: string = ''
  public user!: ITokenPayload


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if(this.userService.getCookie('token')){
      this.token = this.userService.getCookie('token')
      
      if(this.userService.verifyExpiredToken(this.token))
        this.userService.logout()

       this.user = this.userService.decodeToken(this.token)
    }
    
    this.userService.changeCookieEmitter.subscribe(
      res => {
        if(res.token){
          this.token = res.token
          
          if(this.userService.verifyExpiredToken(this.token))
            this.userService.logout()
          
            this.user = this.userService.decodeToken(this.token)
        }else{
          this.token = ''
        }
      }
    )
  } 

  

  submitNameMovie(form: NgForm ){
    //implementar chamanda na API que busca filme por nome
    // console.log(form.value.moviename);
  }

  logout(){
    this.userService.logout()
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
