import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album } from '../model';
import {Location} from '@angular/common';
@Component({
  selector: 'app-album-details',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  newTitle: string = "";
  album: Album;
  loaded: boolean = false;
  creating: boolean = false;
  constructor( private route: ActivatedRoute, private service: AlbumsService, private _location: Location) {
    this.album = {} as Album;
    this.loaded = true;
  }
  updateItem(){
    this.loaded = false;
    const item = {
      id: this.album.id,
      title: this.newTitle,
    }
    this.service.updateAlbum(item).subscribe((item)=>{
      this.album = item;
      this.creating = false;
      this.newTitle = "";
      this.loaded = true;
    })
  }
  back(){
    this._location.back();
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        this.loaded = false;
        this.service.getAlbum(id).subscribe((album) => {
          this.album = album;
          this.loaded = true;
        })
      }
    });
  }

}
