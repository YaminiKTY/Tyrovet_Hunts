import { Component, OnInit } from '@angular/core';
import { RequirementService } from '../requirement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getallrequirement',
  templateUrl: './getallrequirement.component.html',
  styleUrls: ['./getallrequirement.component.css']
})
export class GetallrequirementComponent implements OnInit {
  req: any[];
  constructor(private requirmentservice: RequirementService, private router: Router) {
    this.getAllreq();
  }
  ngOnInit() {
  }
  getAllreq() {
    this.requirmentservice.getRequirement().subscribe(data => {
      console.log(data);
      this.req = data.add;
      console.log(this.req);
    },
      err => {
        console.log(err);
      }, () => {
        console.log('Got The data')
      })
  }
  updateRequirement(data) {
    this.requirmentservice.SelectedRequirement = data;
    console.log(this.requirmentservice.SelectedRequirement);
    this.router.navigateByUrl("/updatereq");
  }

  gotorequirment(data){
    this.requirmentservice.SelectedRequirement = data;
    this.router.navigateByUrl("/schedulingRequirment")
  }
}

