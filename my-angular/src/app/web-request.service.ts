import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebRequestService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }
  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  post(uri: string, items: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, items);
  }
  put(uri: string, items: Object) {
    console.log(`${uri}`);
    console.log(`${this.ROOT_URL}/${uri}`);
    return this.http.put(`${this.ROOT_URL}/${uri}`, items);
  }
  delete(uri: string) {
    console.log(`${this.ROOT_URL}/${uri}`);
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}
