import { Component, OnInit } from '@angular/core';
import {AlbumsService} from "../albums.service";
import { Photo} from "../model";
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';



@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  photos:Photo[] = [];
  constructor( private route: ActivatedRoute, private service: AlbumsService, private _location: Location) {
    this.photos = [];
  }
  back(){
    this._location.back()
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        this.service.getPhotos(id).subscribe((photos) => {
          this.photos = photos;
        })
      }
    });
  }
}
