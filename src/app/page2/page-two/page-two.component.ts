import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlldataService } from 'src/app/alldata.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {
  myData: any;
  details:any=""
  constructor(private ac:ActivatedRoute) {
    const data:any = localStorage.getItem('Data');
    this.myData = JSON.parse(data);
   }
  ngOnInit(): void {
  }
}
