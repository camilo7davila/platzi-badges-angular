import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input() name: string;
  @Input() lastName: string;
  @Input() email: string;
  @Input() twitter: string;
  @Input() job: string;

  @Output() handleClickOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  handleClick(data: string) {
    console.log('se hizo click', data);
    this.handleClickOutput.emit(data)
  }

}
