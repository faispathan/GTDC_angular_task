import { style } from '@angular/animations';
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlldataService } from 'src/app/alldata.service';
import { FormData } from './FormData.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formDataArr: any = [];
  formData = ""
  dataId = 0;
  formDataObj: FormData = new FormData
  UpdateData = false
  submitData = true
  constructor(private fb: FormBuilder, private ad: AlldataService, private router: Router, private elref:ElementRef, private render:Renderer2) {
  }
  ngOnInit(): void {
    const localdata = localStorage.getItem('Data')
    if (localdata != null) {
      this.formDataArr = JSON.parse(localdata)
    }
  }

  num: number = 0
  callbackForm: any = this.fb.group({
    'id': this.fb.control(this.num),
    'Name': this.fb.group({
      'fname': this.fb.control("", Validators.required),
      'mname': this.fb.control(""),
      'lname': this.fb.control("", Validators.required)
    }),
    'email': this.fb.control("", [Validators.required, Validators.email]),
    'phone': this.fb.control("", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    'address1': this.fb.control("", [Validators.required]),
    'address2': this.fb.control(""),
    'city': this.fb.control("", Validators.required),
    'zip': this.fb.control("", [Validators.required, Validators.pattern('[0-9]{6}')]),
  })

  idNum = true

  submit() {
    this.num = this.formDataArr.length + 1
    console.log(this.num)

    this.callbackForm.patchValue({
      'id': this.num
    })

    this.formData = this.callbackForm.value;
    console.log(this.formData)
    this.formDataArr.push(this.formData)
    localStorage.setItem('Data', JSON.stringify(this.formDataArr));
    alert("Record Added Successfully...")
  }

  onEdit(data: any) {
    debugger
    this.callbackForm.patchValue({
      'id': data.id,
      'Name': data.Name,
      'fname': data.fname,
      'mname': data.mname,
      'lname': data.lname,
      'email': data.email,
      'phone': data.phone,
      'address1': data.address1,
      'address2': data.address2,
      'city': data.city,
      'zip': data.zip
    })
    this.submitData = false
    this.UpdateData = true
  }

  onDelete(id: number) {
    for (let index = 0; index < this.formDataArr.length; index++) {
      if (this.formDataArr[index].id == id) {
        this.formDataArr.splice(index, 1);
      }
    }
    localStorage.setItem('Data', JSON.stringify(this.formDataArr))
  }

  onUpdate() {
    debugger
    const element = this.elref.nativeElement.querySelector('#subform');
    this.render.setProperty(element, 'scrollTop', element.offsetTop);

    const record = this.formDataArr.find((m: any) => m.id == this.callbackForm.controls.id.value);
    record.Name.fname = this.callbackForm.controls['Name'].controls.fname.value
    record.Name.mname = this.callbackForm.controls['Name'].controls.mname.value
    record.Name.lname = this.callbackForm.controls['Name'].controls.lname.value
    record.email = this.callbackForm.controls.email.value
    record.phone = this.callbackForm.controls.phone.value
    record.address1 = this.callbackForm.controls.address1.value
    record.address2 = this.callbackForm.controls.address2.value
    record.city = this.callbackForm.controls.city.value
    record.zip = this.callbackForm.controls.zip.value
    localStorage.setItem('Data', JSON.stringify(this.formDataArr))
    this.UpdateData = false
    this.callbackForm.setValue({
      'id': "",
      'Name': {
        'fname': "",
        'mname': "",
        'lname': ""
      },
      'email': "",
      'phone': "",
      'address1': "",
      'address2': "",
      'city': "",
      'zip': ""
    })
    alert("Data updated susscessfully..")
    // this.router.navigate(['/form'])
    this.submitData = true
  }
}
