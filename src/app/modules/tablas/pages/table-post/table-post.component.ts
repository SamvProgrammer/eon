import { Component, OnInit } from '@angular/core';
import { comment } from 'src/app/core/modelos/comment';
import { post } from 'src/app/core/modelos/post';
import { PostssService } from '../../services/postss.service';



@Component({
  selector: 'app-table-post',
  templateUrl: './table-post.component.html',
  styleUrls: ['./table-post.component.scss']
})
export class TablePostComponent implements OnInit {
  public arreglo:post[] = [];
  public arregloComentario:comment[]= [];

  constructor(private postsPrd:PostssService) { }

  ngOnInit(): void {
    this.postsPrd.getPosts().subscribe(datos =>this.arreglo = datos);
  }


  public verComentarios(item:any){
    
    this.arregloComentario = [];

      this.postsPrd.verComentarios(item.id).subscribe(datos =>{
          this.arregloComentario = datos;
      });;
  }
}
