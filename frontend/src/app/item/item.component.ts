import {Component, Input} from "@angular/core";
import { HttpClient } from '@angular/common/http';

export interface Post {
  title: string ;
  thumbnail: string;
  url: string;
  image: string;
  video: string;
}

@Component({selector: 'item', templateUrl: './item.component.html', styleUrls: ['./item.component.css']})
export class Item {
    @Input() post;
    expanded = false;
}
