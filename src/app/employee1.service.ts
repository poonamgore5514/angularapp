import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Employee1Service 
{

  constructor(private httpclient:HttpClient) { }

  saveEmployee1(employee1:Employee1)
  {
    return this.httpclient.post<void>("http://localhost:8080/saveEmployee", employee1);
  }
}

export class Employee1
{
  eid:string;
  ename:string;
  salary:number;

  public constructor(eid:string, ename:string, salary:number )
  {
    this.eid = eid;
    this.ename = ename;
    this.salary = salary;

  }

}
