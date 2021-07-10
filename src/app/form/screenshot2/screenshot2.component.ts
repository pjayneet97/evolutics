import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-screenshot2',
  templateUrl: './screenshot2.component.html',
  styleUrls: ['./screenshot2.component.scss']
})
export class Screenshot2Component implements OnInit {

  contactForm:any = FormGroup;
  contactDetails:any = FormArray;
  constructor(private formService: ServiceService,public fb:FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      contactDetails: this.fb.array([])
      
    });
    this.onContactInfo()
    this.onContactInfo()
    this.onContactInfo()
  }
  onContactInfo(){
    this.contactDetails = this.contactForm.get('contactDetails') as FormArray;
    this.contactDetails.push(this.createContactData());
   /*  console.log("contract push",this.contactDetails) */
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
    this.contactDetails?.removeAt(index);
  }
  get allContact() {
    /* console.log(this.contactForm.get('contactDetails') as FormArray) */
    return this.contactForm.get('contactDetails') as FormArray
  }
  onSubmit(){
    console.log(this.contactForm)
    this.formService.contactInfo(this.contactForm.value);
    let ss2 = { contactInfo: this.contactForm.value}
  }
  changeTab(tab:any){
    console.log("tab")
    this.formService.tabChange(tab)
    }
}
