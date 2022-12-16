import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(
      'https://qaapi.ibc.media/api/v1/admin/getLatestUsers?startDate=2022-12-14'
    );
  }
}
