import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-screenshot5',
  templateUrl: './screenshot5.component.html',
  styleUrls: ['./screenshot5.component.scss']
})
export class Screenshot5Component implements OnInit {

  newPaymentForm:any = FormGroup;
  countryList:any = []
  constructor(private formService: ServiceService) { }

  ngOnInit(): void {
    this.newPaymentForm = new FormGroup({
      country: new FormControl(null,Validators.required),
      sortCode: new FormControl(null,Validators.required),
      bankName: new FormControl(null,Validators.required),
      accountNo: new FormControl(null,Validators.required),
      bankBranch: new FormControl(null,Validators.required),
      accountName: new FormControl(null,Validators.required)
      
    })
    this.setCountryList()
  }
  onSubmit(){
    console.log(this.newPaymentForm)
    this.formService.newPaymentInfo(this.newPaymentForm.value);
    this.closeBank()
  }
  closeBank(){
    console.log("tab")
    this.formService.closeBankDetails();
    }
    setCountryList(){
      this.formService.getCountryList().subscribe( res => {
        this.countryList = res;
        console.log("countrylist",res)
      })
    }
}
