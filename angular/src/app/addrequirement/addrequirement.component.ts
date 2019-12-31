import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequirementService } from '../requirement.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addrequirement',
  templateUrl: './addrequirement.component.html',
  styleUrls: ['./addrequirement.component.css']
})
export class AddrequirementComponent implements OnInit {


  constructor(private requirementService: RequirementService ,  private router: Router) { }
  addRequirments(reqform) {
    console.log(reqform)
    this.requirementService.addrequirement(reqform.value).subscribe(res => {
      console.log('requirement added successfully');
      alert('requirement Added Successfully...!')
      reqform.reset();
      this.router.navigateByUrl("/gettall");
    }, err => {
      console.log('requirement not added');
    });
  }
  ngOnInit() {
   
  }


}
