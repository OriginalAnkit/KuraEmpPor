import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
@Injectable()
export class appService {
  emps: any;
  constructor(private http: Http) { }
  url = "http://localhost:3000";
  addEmp(emp: NgForm) {
    // console.log(emp.value);
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    this.http.post(this.url + "/_addEmp", JSON.stringify(emp.value), { headers: header }).subscribe();
  }

  getAllEmp() {
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    return this.http.get(this.url + "/_getAllEmp", { headers: header });
  }

  getOneEmp(id: string) {
    let header = new Headers;
    header.append('Content-Type', 'application/json');
    return this.http.get(this.url + "/_oneEmp/"+id, { headers: header });
  }
}