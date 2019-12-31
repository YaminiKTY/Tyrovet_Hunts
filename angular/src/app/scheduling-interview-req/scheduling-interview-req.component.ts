import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-scheduling-interview-req',
  templateUrl: './scheduling-interview-req.component.html',
  styleUrls: ['./scheduling-interview-req.component.css']
})
export class SchedulingInterviewReqComponent implements OnInit {

  constructor(private requirementService:RequirementService, private router:Router) { }

  ngOnInit() {
  }
  reqSchedulingform(reqform){
    console.log(reqform);
    this.requirementService.scheduleInterview(reqform.value).subscribe(res => {
      console.log('interview sheduled successfully');
      alert('interview sheduled successfully...!')
      reqform.reset();
      this.router.navigateByUrl("/gettall");
    }, err => {
      console.log('interview sheduled fail');
    });
  }
}
