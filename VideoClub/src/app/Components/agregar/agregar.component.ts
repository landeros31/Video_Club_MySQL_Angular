import { Component, OnInit } from '@angular/core';
import {Movie,MovieService} from '../../services/movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  
  movie:Movie={
    mov_id :'',
    mov_title:'',
    mov_year:0,
    mov_time:0,
    mov_lang:'',
    mov_dt_rel: 'dd-mm-aaaa',
    mov_rel_country:''
  }
  constructor(private MovieService:MovieService, private router:Router ) { }

  ngOnInit(): void {
  }

 agregar(){
    //delete this.movie.mov_id;
   this.MovieService.addMovie(this.movie).subscribe(
     res=>{
      this.router.navigate(['/inicio']) 
      console.log(res)     

   },
   err=> console.error(err));
   
 }

}
