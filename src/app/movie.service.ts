import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get } from 'http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url:string='https://ghibliapi.vercel.app/films' // ketu marim url (API) e ghibili 

  constructor(private http:HttpClient) {}

    getMovies(){
      return this.http.get(this.url);
    }// bejme thirjet http 

getMovieById(id:string){
  return this.http.get(this.url + '/'+id)
}
   }
  


