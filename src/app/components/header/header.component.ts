import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitNameMovie(form: NgForm ){
    //implementar chamanda na API que busca filme por nome
    // console.log(form.value.moviename);
  }

}
