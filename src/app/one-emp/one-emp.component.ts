import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { appService } from '../app.service';

@Component({
  selector: 'app-one-emp',
  templateUrl: './one-emp.component.html',
  styleUrls: ['./one-emp.component.css']
})
export class OneEmpComponent implements OnInit {

  constructor(private route:ActivatedRoute,private appSer:appService) { }
  id:string;
  emp:any;
  ngOnInit() {
    this.route.params.subscribe(
      (param:Params)=>{
        this.id=param["id"];
        this.appSer.getOneEmp(this.id).subscribe(
          (res:any)=>{
            console.log(res._body);
            this.emp=JSON.parse(res._body);
          }
        );
      }
    )
  }

}
