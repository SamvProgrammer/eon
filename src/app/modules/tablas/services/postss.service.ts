import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { comment } from 'src/app/core/modelos/comment';
import { post } from 'src/app/core/modelos/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostssService {

  constructor(private http:HttpClient) { }


  public getPosts():Observable<post[]>{
    return this.http.get<post[]>(`${environment.url}/posts`);
  }

  public verComentarios(id:number):Observable<comment[]>{
    return this.http.get<comment[]>(`${environment.url}/posts/${id}/comments`);
  }

  
}
