import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Form2Service {

  tabs:any = "personalInfo";

  constructor() { }

  tabChange(tab:any){
    this.tabs = tab;
    console.log("tabchange", this.tabs)
  }
}
