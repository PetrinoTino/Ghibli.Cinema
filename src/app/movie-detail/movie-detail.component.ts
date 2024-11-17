import { Component, OnInit, TemplateRef } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgIfContext } from '@angular/common';
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit{


movie:any | null;


  constructor(private movieService:MovieService,private activeRoute:ActivatedRoute){}
  
  
  ngOnInit(): void {
  
  const id = this.activeRoute.snapshot.paramMap.get('id');
  this.getMovieById(id!);// ekziston nje id dhe vendos ! qe te heqe erorin
  }



  getMovieById(id:string){
    this.movieService.getMovieById(id)
    .subscribe((movie:any)=> this.movie=movie)
  }

}
