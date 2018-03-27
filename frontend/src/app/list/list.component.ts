import {Component} from "@angular/core";
import { HttpClient } from '@angular/common/http';

export interface Post {
  title: string ;
  thumbnail: string;
  url: string;
  image: string;
  video: string;
}

@Component({selector: 'list', templateUrl: './list.component.html'})
export class List {
  posts;
  constructor(private http: HttpClient){
    this.http.get<Post>('/api/list/funny').subscribe(posts => this.posts = posts);
  }
}
