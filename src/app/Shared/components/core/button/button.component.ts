import { Component, Input, OnInit } from '@angular/core';
import {
  faEye,
  faPlus,
  faClone,
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  faEye = faEye
  faPlus = faPlus
  faClone = faClone

  @Input() buttonType: string = ''
  @Input() text: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}


