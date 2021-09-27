import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url='/api';
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
  id?:string;
  tittle?:string;
  year?:number;
  time?:number;
  lang?:string;
  dt?:Date;
  country?:string;

}