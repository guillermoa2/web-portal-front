import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  async login(): Promise<any> {
    const res = await this.req('post','http://localhost:5000/api/login');
    return res;
  }

  async req(method: string, url: string, body?: any): Promise<any> {
    if (body) {
      return this.http[method](url, body, {}).toPromise().catch(err => console.log(err));
    } else {
      return this.http[method](url, {}).toPromise().catch(err => console.log(err));
    }
  }

}
