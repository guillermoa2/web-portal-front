import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private readonly http: HttpClient) { }

  async getAllMeetings(): Promise<any> {
    const res = await this.req('get', 'http://localhost:5000/meetings')
    console.log('getAllMeetings', res)
    return res;
  }

  async getHeaders(): Promise<HttpHeaders> {
    const token = localStorage.getItem('jwt');
    console.log("token", token)
    const data =  new HttpHeaders({Authorization: `bearer ${token}`, Accept: 'application/json', "x-access-token":  `bearer ${token}`});
    return data;
  }

  async req(method: string, url: string, body?: any): Promise<any> {
    console.log('this is meeting.service body',body)
    const headers = await this.getHeaders()
    if (body) {
      return this.http[method](url, body, {headers}).toPromise().catch(err => console.log(err));
    } else {
      return this.http[method](url, {headers}).toPromise().catch(err => console.log(err));
    }
  }
}
