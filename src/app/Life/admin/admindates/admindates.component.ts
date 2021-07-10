import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindates',
  templateUrl: './admindates.component.html',
  styleUrls: ['./admindates.component.scss']
})
export class AdmindatesComponent implements OnInit {

  operation: string = 'actions'

  constructor() { }

  ngOnInit(): void {
  }

}
