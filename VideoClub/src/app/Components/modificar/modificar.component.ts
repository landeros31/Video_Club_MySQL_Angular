import { Component, OnInit } from '@angular/core';
import {Movie,MovieService} from '../../services/movie.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  movie:Movie={
    mov_id :'',
    mov_title:'',
    mov_year:0,
    mov_time:0,
    mov_lang:'',
    mov_dt_rel: '0000-00-00',
    mov_rel_country:''
  }
  constructor(private MovieService:MovieService, private router:Router , private activeRoute:ActivatedRoute ) { }

  ngOnInit(): void {

    const id_in = <string> this.activeRoute.snapshot.params.id
    console.log("id de entrada"+ id_in)
    if(id_in){
      this.MovieService.getOneMovie(id_in).subscribe(
        (res:any)=>{
       this.movie=res[0];
       console.log(res)
      },err=> console.log(err)
      )
    }
  }

  updateMovie(){
    this.MovieService.editMovie(this.movie.mov_id,this.movie).subscribe(
      res=>{              
        console.log(res)
      },err=>console.log(err)
    )
 this.router.navigate(['/inicio']);    
  }

}
