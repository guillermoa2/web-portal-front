import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private readonly http: HttpClient) { }

  async upload(body): Promise<any> {
    const res = await this.req('post', 'http://localhost:5000/upload', body)
    return res;
  }

  async download(): Promise<any> {
    const res = await this.req('get', 'http://localhost:5000/download')
    console.log("download res",res)
    return res;
  }

  async delete(body): Promise<any>  {
    const res = await this.req('post', 'http://localhost:5000/delete', body)
    console.log("body", body)
    return res;
  }

  async getHeaders(): Promise<HttpHeaders> {
    const token = localStorage.getItem('jwt');
    // console.log("token", token)
    const data =  new HttpHeaders({Authorization: `bearer ${token}`, Accept: 'application/json', "x-access-token":  `bearer ${token}`});
    return data;
  }

  async req(method: string, url: string, body?: any): Promise<any> {
    console.log('this is document.service body',body)
    const headers = await this.getHeaders()
    if (body) {
      return this.http[method](url, body, {headers}).toPromise().catch(err => console.log('this is req.body err',err));
    } else {
      return this.http[method](url, {headers}).toPromise().catch(err => console.log('this is req.!body err',err));
    }
    // this.http.post()
  }
}
