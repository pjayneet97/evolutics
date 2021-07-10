import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-screenshot4',
  templateUrl: './screenshot4.component.html',
  styleUrls: ['./screenshot4.component.scss']
})
export class Screenshot4Component implements OnInit {

  paymentform:any = FormGroup;
  /* list:any = [] */
  listcheck = false;
  data:any;
  pList:any =[]
  constructor(public formService: ServiceService) { }

  ngOnInit(): void {
    this.paymentform = new FormGroup({
      paymentMethod: new FormControl(null,Validators.required),
      payeeName: new FormControl(null,Validators.required)
      
    })
    /* let data = this.formService.newPaymentData 
    this.list.push(data)
    console.log("banklist",this.list) */
    
  }
  onSubmit(){
    console.log(this.paymentform)
    if(this.pList){
    let data = {...this.paymentform.value, ...this.pList}
      console.log("append details",data )
      this.formService.paymentInfo(data);
    }
   else{
     console.log("select bank")
   }
  }
  changeTab(tab:any){
    console.log("tab")
    this.formService.tabChange(tab)
    }
    showBank(){
      this.formService.showBankDetail()
    }
    selectBankDetails(i:any){
  this.pList = this.formService.list[i]
    }
}
