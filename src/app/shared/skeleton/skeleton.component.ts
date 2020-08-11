import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {

  @Input() repeat: number

  iterar: [{}] = [{}]

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.repeat; i++) {
      this.iterar.push({ 'algo': i })
    }
  }

}
