import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-screenshot3',
  templateUrl: './screenshot3.component.html',
  styleUrls: ['./screenshot3.component.scss']
})
export class Screenshot3Component implements OnInit {

  directorsForm:any = FormGroup;
  directorsDetails:any = FormArray;
  constructor(private formService: ServiceService,public fb:FormBuilder) { }

  ngOnInit(): void {
    this.directorsForm = this.fb.group({
      directorsDetails: this.fb.array([])
      
    });
    this.onContactInfo()
    this.onContactInfo()
    this.onContactInfo()
  }
  onContactInfo(){
    this.directorsDetails = this.directorsForm.get('directorsDetails') as FormArray;
    this.directorsDetails.push(this.createContactData());
    /* console.log("contract push",this.directorsDetails) */
  }
  createContactData(): FormGroup {
    return this.fb.group({
      clientNo: '',
      name: '',
      relationship: '',
      phoneNo: '',
      email: ''
    });
  }
  onDeleteContact(index: any) {
    this.directorsDetails?.removeAt(index);
  }
  get allContact() {
   /*  console.log(this.directorsForm.get('directorsDetails') as FormArray) */
    return this.directorsForm.get('directorsDetails') as FormArray
  }
  onSubmit(){
    console.log(this.directorsForm)
    this.formService.directorInfo(this.directorsForm.value);
    let ss3 = { directors: this.directorsForm.value}
  }
 /*  copy() {
    this.items.push(this.items)
 } */
 changeTab(tab:any){
  console.log("tab")
  this.formService.tabChange(tab)
  }
}
