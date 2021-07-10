import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-runbatch',
  templateUrl: './runbatch.component.html',
  styleUrls: ['./runbatch.component.scss']
})
export class RunbatchComponent implements OnInit {

  operation: string = 'actions'

  lines: number[] = [1,2,3,4,5,6,7,8]

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
