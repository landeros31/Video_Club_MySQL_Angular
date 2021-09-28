import { Component, OnInit } from '@angular/core';
import {MovieService,Movie} from '../../services/movie.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private MovieService : MovieService, private router:Router ) { }

  ListMovie: any =[] ;
  

  ngOnInit(): void {
    this.listarMovie();
  }

  listarMovie(){
    this.MovieService.getMovie().subscribe(

      res=>{
        console.log(res);
        this.ListMovie=<any>res;
        
      },
      err=>console.log(err)
    )
  }

  deletem(id:string){
   this.MovieService.deleteMovie(id).subscribe(
     res=>{

        console.log("movie delete");
        this.listarMovie();
   },
   err=>console.log(err))
  };

  edit(id:string){
    this.router.navigate(['/edit/'+id]);
  }

}
