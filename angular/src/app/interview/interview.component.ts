import { Component, OnInit } from '@angular/core';
import { RequirementService } from '../requirement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {
req1:any[];
  constructor(private requirementService: RequirementService, private router: Router) { }
  getDataFromBd() {
    this.requirementService.getCandidate().subscribe(data => {
      console.log(data);
      this.req1 = data.candi;
      console.log(this.req1);
    }, err => {
      console.log(err);
    }, () => { console.log('Got The data') })
  }
  ngOnInit() {
  }
  addcandii(reqform){
   this.requirementService.scheduleInterview(reqform.value).subscribe(res =>{
    console.log(this.requirementService.SelectedRequirement);
    this.router.navigateByUrl("/");
    reqform.reset();
  }, 
  err =>{
    console.log("not updated");
  })
  }
}
