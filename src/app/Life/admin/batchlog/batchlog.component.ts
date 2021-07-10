import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-batchlog',
  templateUrl: './batchlog.component.html',
  styleUrls: ['./batchlog.component.scss']
})
export class BatchlogComponent implements OnInit {

  operation: string = 'actions'

  topBarElements : {title: string  ,content: string } [] = [
    {title: 'Batch Code', content:'EOD'}
   ,{title: 'Batch Name', content:'End of Day'}
   ,{title: 'Batch No', content:'216768'}
   ,{title: 'Start Date', content:'10/jan/2020'}
   ,{title: 'Start Time', content:'10:00'}
   ,{title: 'End Date', content:'10/jan/2020'}
   ,{title: 'End Time', content:'10:15'}
   ,{title: 'Batch Run Time', content:'15min'}
   ,{title: 'Schedule Basis', content:'End of Every Day'}
   ,{title: 'Next Bacth Date', content:'11/jan/2020'}
   ,{title: 'Next Bacth Time', content:'10:00'}
   ,{title: 'User Initiated', content:'System'}
 ]

 tableElements : {
   seqNo: number,
   processType: string,
   select: string,
   processCode: string,
   processName: string,
   parameter: string
 } [] = [
   {seqNo: 1, processType: 'Process', select:'X', processCode:'EVO.L.LAPSE', processName:'Lapse Policies Due for Lapsing',parameter:'--'}
   ,{seqNo: 1, processType: 'Process', select:'X', processCode:'EVO.L.LAPSE', processName:'Lapse Policies Due for Lapsing',parameter:'--'}
   ,{seqNo: 1, processType: 'Process', select:'X', processCode:'EVO.L.LAPSE', processName:'Lapse Policies Due for Lapsing',parameter:'--'}
   ,{seqNo: 1, processType: 'Process', select:'X', processCode:'EVO.L.LAPSE', processName:'Lapse Policies Due for Lapsing',parameter:'--'}
   ,{seqNo: 1, processType: 'Process', select:'X', processCode:'EVO.L.LAPSE', processName:'Lapse Policies Due for Lapsing',parameter:'--'}
   ,{seqNo: 1, processType: 'Process', select:'X', processCode:'EVO.L.LAPSE', processName:'Lapse Policies Due for Lapsing',parameter:'--'}
 ]

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
