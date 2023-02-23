import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  myData1: any;
  details: any;
  constructor(private ac: ActivatedRoute) {
    ac.params.subscribe(par => {
      if (par['id']) {
        debugger
        this.details = this.getDetailsById(par['id'])
      }
    })
  }

  ngOnInit(): void {
    this.myData()
  }
  myData() {
    const data: any = localStorage.getItem('Data');
    this.myData1 = JSON.parse(data);
    return this.myData1
  }

  getDetailsById(id: number) {
    return this.myData().find((m: any) => m.id == id)!
  }

}
