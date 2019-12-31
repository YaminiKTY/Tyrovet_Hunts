import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const headeroption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class InterviewService {
  url: string = "http://localhost:8081/talenthunt";
  constructor(private http: HttpClient) { }

  getAllMothlyRequir(){
    return this.http.get<any>(`${this.url}/getallmonthly`,headeroption)
  }

}
