import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators'

import { BadgesService } from '../../../core/services/badges/badges.service'

@Component({
  selector: 'app-badge-list-screen',
  templateUrl: './badge-list-screen.component.html',
  styleUrls: ['./badge-list-screen.component.scss']
})
export class BadgeListScreenComponent implements OnInit {

  badges$: Observable<any>

  constructor(private badgeService: BadgesService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.badges$ = this.badgeService.getBadges()
    }, 500);
    
  }

}
