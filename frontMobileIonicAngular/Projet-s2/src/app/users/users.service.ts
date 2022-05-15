import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./users.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  host = 'http://localhost:8080'
  constructor(public http: HttpClient) {
  }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.host}/user/list`);
  }
}
