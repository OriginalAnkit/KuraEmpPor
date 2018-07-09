import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { appService } from '../app.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  constructor(private appSer:appService) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
    this.appSer.addEmp(form);
  }
}
