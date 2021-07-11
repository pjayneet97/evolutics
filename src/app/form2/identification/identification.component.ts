import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Form2Service } from '../form2.service';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent implements OnInit {

  identificationForm:FormGroup=new FormGroup({})
  constructor(private allFormService: Form2Service) { }

  ngOnInit(): void {
    this.identificationForm = new FormGroup({
      idType: new FormControl(null,Validators.required),
      idExpiryDate: new FormControl(null,Validators.required),
      nationalInsurranceNo: new FormControl(null,Validators.required),
      idNumber: new FormControl(null,Validators.required),
      taxIdNo: new FormControl(null,Validators.required),
      bankVerifyNo: new FormControl(null,Validators.required),
      pensionNo: new FormControl(null)     
      
    })
  }
  get validation() { return this.identificationForm?.controls }

  onSubmit(){
    console.log(this.identificationForm)
 this.allFormService.identificationInfo(this.identificationForm.value);
  }
  changeTab(tab:any){
    console.log("tab")
    this.allFormService.tabChange(tab)
    }

upload(event:any){
  let file = event.target.files[0];
  console.log("imagefile",file)
  console.log("imagepath",file.name)
}
}
