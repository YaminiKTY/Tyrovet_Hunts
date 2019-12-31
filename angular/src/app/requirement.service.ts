import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AddrequirementComponent } from './addrequirement/addrequirement.component';
const headeroption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RequirementService {
  url: string = "http://localhost:8081/talenthunt";
  SelectedRequirement: any = {
    clientId: null,
    client: null,
    technology: null,
    yoe: null,
    location: null,
    nopositions: null,
    openingdate: null,
    closingdate: null,
    role: null,
    rate: null,
    contact: null,
    jobdescription: null
  }
  SelectedCandidate: any = {
    candidateID: null,
    candidateName: null,
    email: null,
    candidateNo: null,
    govtId: null,
    relocate: null,
    candidateType: null,
    yearOfPassing: null,
    percentage: null,
    currentDesignation: null,
    yearOfExperience: null,
    noticePeriod: null,
    currentCtc: null,
    expectedCtc: null

  }

  SelectedInterview: any = {
    interviewId: null,
    interviewlocation: null,
    interviewType: null,
    skills: null,
    status: null,
    remarks: null,
    interviewer: null,
    clientId: null

  }

  constructor(private http: HttpClient) { }

  addrequirement(data) {
    return this.http.post(`${this.url}/addrequirement`, data, headeroption);
  }
  getRequirement() {
    return this.http.get<any>(`${this.url}/getAllInfo`, headeroption);
  }
  updateRequirment(data) {
    return this.http.put(`${this.url}/updateinfo`, data, headeroption);
  }
  candidateInfo(data) {
    return this.http.post(`${this.url}/addcandidate`, data, headeroption);
  }
  getCandidate() {
    return this.http.get<any>(`${this.url}/getAllcandiInfo`, headeroption);
  }
  scheduleInterview(data) {
    return this.http.post(`${this.url}/scheduleinterview`, data, headeroption)
  }
  getAllScheduleInfo() {
    return this.http.get<any>(`${this.url}/getallschedule`, headeroption);
  }
}