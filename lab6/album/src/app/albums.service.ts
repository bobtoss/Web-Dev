import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {Album, Photo} from "./model";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private client:HttpClient) { }
  getAlbums(): Observable<Album[]>{
    let val = this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
    return val;
  }
  getAlbum(id: any): Observable<Album>{
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  deleteAlbum(id: any): Observable<any>{
    return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  updateAlbum(item: Album): Observable<Album> {
    return this.client.put<Album>(`https://jsonplaceholder.typicode.com/albums/${item.id}`,item);
  }
  createAlbum(item: Album): Observable<Album> {
    return this.client.post<Album>(`https://jsonplaceholder.typicode.com/albums/`,item);
  }
  getPhotos(id: any): Observable<Photo[]>{
    return this.client.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
