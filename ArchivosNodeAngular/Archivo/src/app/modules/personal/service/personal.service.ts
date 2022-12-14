import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { catchError } from 'rxjs';
import { APP_URL } from 'src/app/services/base-urls';
import { Personal } from '../types/personla';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
 loading:boolean = false;
  private people:Personal[] = [];
  get personal(){
    return[...this.people];
  }
 constructor(private http:HttpClient){}

 findAll(){
  this.loading = true;
  return this.http.get<Personal[]>(`${APP_URL}api/personal/`)
 }

save(personal:Personal){
  this.loading = true
  return this.http.post<Personal>(`${APP_URL} api/personal/`, personal)
}
}
