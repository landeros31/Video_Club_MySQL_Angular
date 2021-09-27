import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../services/movie.service'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private MovieService : MovieService) { }

  ngOnInit(): void {
    this.listarMovie();
  }

  listarMovie(){
    this.MovieService.getMovie().subscribe(

      res=>{
        console.log(res)
      },
      err=>console.log(err)
    )
  }

}
