import { Component, OnInit } from '@angular/core';
import { appService } from '../app.service';

@Component({
  selector: 'app-all-emp',
  templateUrl: './all-emp.component.html',
  styleUrls: ['./all-emp.component.css']
})
export class AllEmpComponent implements OnInit {

  constructor(private appSer: appService) { }
  emps: any;
  ngOnInit() {
    this.appSer.getAllEmp().subscribe(
      (res: any) => {
        if (JSON.parse(res._body).error == "error") {
          console.log("error");
        } else {
          // console.log(res._body);
          this.emps = JSON.parse(res._body);
        }
      }
    );;
  }

}
