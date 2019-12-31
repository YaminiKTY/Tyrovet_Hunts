import { Component, OnInit } from '@angular/core';
import { RequirementService } from '../requirement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updaterequirement',
  templateUrl: './updaterequirement.component.html',
  styleUrls: ['./updaterequirement.component.css']
})
export class UpdaterequirementComponent implements OnInit {
  req: any[];
  constructor(private requirementService: RequirementService, private router: Router) {
  
  }
  getDataFromBd() {
    this.requirementService.getRequirement().subscribe(data => {
      console.log(data);
      this.req = data.add;
      console.log(this.req);
    }, err => {
      console.log(err);
    }, () => { console.log('Got The data') })
  }
  ngOnInit() { }
  addreq(requirment) {
    this.requirementService.updateRequirment(requirment.value).subscribe(res =>{
      console.log(this.requirementService.SelectedRequirement);
      this.router.navigateByUrl("/updatereq");
      requirment.reset();
    }, 
    err =>{
      console.log("not updated");
    })
    
  }
}


