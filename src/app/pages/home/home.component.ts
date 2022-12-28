import { Component, OnInit } from '@angular/core';
import { forkJoin, Subject } from 'rxjs';
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

  public pageEvent!: PageEvent;
  public pageSize!: number
  public listLength!:number


  constructor(private movieService: MovieService, private searchService: SearchService) {
    searchService.movieNameSearchObservable$.subscribe({
      next: res => {
        //esse res acima é o nome do filme pesquisado
        this.movieService.getSearchedMovie(res).subscribe({
          next: res => this.movies = res.results
        })
      }
    })
   }

  ngOnInit(): void {
    this.loadContent(1)
  }

  loadContent(page: number){
    const getMovies = this.movieService.getMovies(page)
    const getGenres = this.movieService.getGenres()

    forkJoin([getMovies, getGenres]).subscribe({
      next: res => {
        this.movies = res[0].results
        this.pageSize = res[0].results.length
        this.listLength = res[0].total_results

        this.movies.map(movie => movie.mainGenre = res[1].genres.filter(genre =>
          movie.genre_ids[0] === genre.id ? genre.name : null
        )[0]?.name)
      }
    })
  }


  changePage(evento: PageEvent){
    this.loadContent(evento.pageIndex+1)
    window.scrollTo(0, 0)
  }
}
