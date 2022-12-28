import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { IMovie } from 'src/app/models/imovie';
import { MovieService } from 'src/app/movies/services/movie.service';
import { SearchService } from 'src/app/services/search.service';

import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movies: IMovie[] = []
  public movieNameSearch = ''

  public listLength!:number

  public currentPage = 0

  constructor(private movieService: MovieService, private searchService: SearchService) {
    searchService.movieNameSearchObservable$.subscribe({
      next: res => {
        this.currentPage = 0
        this.movieNameSearch = res
        this.loadContent(1)
      }
    })
   }

  ngOnInit(): void {
    this.loadContent(1)
  }

  loadContent(page: number){   
    let getMovies
    if(this.movieNameSearch) getMovies = this.movieService.getSearchedMovie(this.movieNameSearch, page)
    else getMovies = this.movieService.getMovies(page)
    

    const getGenres = this.movieService.getGenres()

    forkJoin([getMovies, getGenres]).subscribe({
      next: res => {
        this.movies = res[0].results        
        this.listLength = res[0].total_results

        this.movies.map(movie => movie.mainGenre = res[1].genres.filter(genre =>
          movie.genre_ids[0] === genre.id ? genre.name : null
        )[0]?.name)
      }
    })
  }


  changePage(evento: PageEvent){
    if(evento.previousPageIndex && evento.previousPageIndex > evento.pageIndex)
      this.currentPage--
    else this.currentPage++
    
    this.loadContent(this.currentPage+1)
    window.scrollTo(0, 0)    
  }
}
