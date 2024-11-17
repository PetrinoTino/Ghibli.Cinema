import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoaderComponent } from "../loader/loader.component";

interface Movie {
  id: string;
  title: string;
  description: string;
  image: string;
  director: string;
  rt_score: string;
  original_title: string;
  release_date: string;
}
@Component({
  selector: 'app-movie-grid',
  standalone: true,
  imports: [CommonModule, RouterLink, LoaderComponent], // i permban te gjitha metodat
  templateUrl: './movie-grid.component.html',
  styleUrl: './movie-grid.component.css'
})
export class MovieGridComponent implements OnInit {

  movies:Movie[]=[];
  title:string='';
  filteredMovies: Movie[] = [];

  constructor(private movieService: MovieService){}

  ngOnInit(): void {
   this.getMovies();
   this.title='Gibili Cinema'
  }

  getMovies() {
    this.movieService.getMovies()
      .subscribe((movies: any) => {
        this.movies = movies;
        this.getFilteredMovies('');
      });
  }
  
  // any heq eroret pranon te gjitha tipet
getFilteredMovies(searchTerm: string) {
  this.filteredMovies = this.movies.filter(
    (movies) => movies.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
}
  }


