import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  baseUrl = environment.baseUrl
  
  constructor(private http: HttpClient, public router: Router) { }

  GetHeaderLanding() {
    return this.http.get(`${this.baseUrl}/Landing/GetHeaderLanding`)
  }

  GetPostByHeaderLanding(id: number) {
    return this.http.get(`${this.baseUrl}/Landing/GetPostByHeaderLanding/${id}`)
  }
  
  GetPostIdLanding(id: number) {
    return this.http.get(`${this.baseUrl}/Landing/GetPostIdLanding/${id}`)
  }

  GetPostMainLanding() {
    return this.http.get(`${this.baseUrl}/Landing/GetPostMainLanding`)
  }
}
