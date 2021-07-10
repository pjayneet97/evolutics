import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createbatch',
  templateUrl: './createbatch.component.html',
  styleUrls: ['./createbatch.component.scss']
})
export class CreatebatchComponent implements OnInit {

  operation: string = 'actions'

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const oper = params.get('operation')
        this.operation = oper? oper: 'actions';
      }
    )
  }
}
