import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { User } from 'src/app/interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class BadgesService {

  BASE_URL = environment.BASE_URL

  constructor(private http: HttpClient) { }

  getBadges() {
    return this.http.get<any>(this.BASE_URL)
  }

  getBadgeById(id: string) {
    return this.http.get<any>(`${this.BASE_URL}/${id}`)
  }

  deleteBadgeById(id: string) {
    return this.http.delete<any>(`${this.BASE_URL}/${id}`)
  }

  editBadge(id: string, body: User) {
    return this.http.put<any>(`${this.BASE_URL}/${id}`, body)
  }

  createBadge(body: User) {
    return this.http.post<any>(`${this.BASE_URL}`, body)
  }

}
