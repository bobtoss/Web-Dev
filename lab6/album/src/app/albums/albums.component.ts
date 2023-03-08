import { Component, OnInit } from '@angular/core';
import {Album} from "../model";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[] = [];
  constructor(private service: AlbumsService) { }
  deleteItem(id:number){
    this.albums = this.albums.filter((x)=> x.id != id );;
  }
  ngOnInit(): void {
    this.service.getAlbums().subscribe((albums)=>{
      this.albums = albums;
    });
  }

}
