import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public filmes: Array<{name: string, genre: string, release: string, stars: number}> = [
    {
      name: 'Matrix',
      genre: 'Ação',
      release: '10 de Janeiro de 1999',
      stars: 5
    },
    {
      name: 'As braquelas',
      genre: 'Comédia',
      release: '17 de Março de 2010',
      stars: 8
    },
    {
      name: 'Interestelar',
      genre: 'Fição-Científica',
      release: '25 de Junho de 2014',
      stars: 2
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
