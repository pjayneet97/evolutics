import { Component, OnInit } from '@angular/core';
import { Form2Service } from '../form2.service';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.scss']
})
export class PersonalinfoComponent implements OnInit {

  constructor(public form2service: Form2Service) { }

  ngOnInit(): void {
  }

  changeTab(tab:any){
    console.log("tab")
    this.form2service.tabChange(tab)
    }
}
