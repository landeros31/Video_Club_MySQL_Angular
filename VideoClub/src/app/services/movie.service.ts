import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url='/api';
  //url2='http://localhost:3000/api';
  constructor(private http : HttpClient) { }

  ///get movie

 getMovie(){

  return this.http.get(this.url);
 }

/////get 1 movie

getOneMovie(id:string){
   return this.http.get(this.url+'/'+id)
}
 
///////add movie
addMovie(movie:Movie){
  console.log("este es en la ruta")
  console.log(movie)
  return this.http.post(this.url,movie)
  
}

deleteMovie(id:string){
  return this.http.delete(this.url+'/'+id)
}
////////edit

editMovie(id:string, movie:Movie){
 return this.http.put(this.url+'/'+id,movie)
}

}

export interface Movie{
  mov_id:string;
  mov_title?:string;
  mov_year?:number;
  mov_time?:number;
  mov_lang?:string;
  mov_dt_rel?: string ;
  mov_rel_country?:string;

}