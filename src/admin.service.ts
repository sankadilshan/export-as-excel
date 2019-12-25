import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
jaon=[]
  constructor(private _http:HttpClient) { }
  
  sendData(){
    return this._http.get('./assets/data.json')
  }
  
}
