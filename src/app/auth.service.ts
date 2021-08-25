import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  async login(body): Promise<any> {
    const res = await this.req('post','http://localhost:5000/login', body);
    // console.log(res)
    return res;
  }

  async register(body): Promise<any> {
    const res = await this.req('post','http://localhost:5000/register', body);
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
