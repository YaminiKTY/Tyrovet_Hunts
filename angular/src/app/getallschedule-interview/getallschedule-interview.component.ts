import { Component, OnInit } from '@angular/core';
import { RequirementService } from '../requirement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getallschedule-interview',
  templateUrl: './getallschedule-interview.component.html',
  styleUrls: ['./getallschedule-interview.component.css']
})
export class GetallscheduleInterviewComponent implements OnInit {
  interviews:any[]
  constructor(private requirmentservice: RequirementService, private router: Router) { 
   this.getAllSchedule();
  }

  ngOnInit() {
  }
getAllSchedule(){
  this.requirmentservice.getAllScheduleInfo().subscribe(data => {
    console.log(data);
    this.interviews = data.schedule;
    console.log(this.interviews);
  },
  err => {
    console.log(err);
  }, () => {
    console.log('Got The data')
  })
}
schedule(interview){
  console.log(interview)
  this.requirmentservice.SelectedInterview =interview;
  this.router.navigateByUrl('/getallschedule');
}
}

