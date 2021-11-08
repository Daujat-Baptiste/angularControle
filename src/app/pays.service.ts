import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PaysService {

  constructor(private http: HttpClient) {
  }
  getData() {
    let url = "https://restcountries.com/v3.1/all"
    return this.http.get(url)
  }
}
