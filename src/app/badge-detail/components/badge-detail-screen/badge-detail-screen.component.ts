import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap, retry, tap, map } from 'rxjs/operators';
import { pipe, Observable } from 'rxjs';

import { BadgesService } from 'src/app/core/services/badges/badges.service';
import { User } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-badge-detail-screen',
  templateUrl: './badge-detail-screen.component.html',
  styleUrls: ['./badge-detail-screen.component.scss']
})
export class BadgeDetailScreenComponent implements OnInit {

  badge$: Observable<User>
  id: string = ''

  constructor(
    private route: ActivatedRoute,
    private badgeService: BadgesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.badge$ = this.route.params
      .pipe(
        switchMap((params: Params) => {
          this.id = params.id 
          return this.badgeService.getBadgeById(params.id)
        }),
        map((item) => item.payload),
        retry(2)
      )
  }

  handleDelete() {
    this.badgeService.deleteBadgeById(this.id).subscribe(() => {
      this.router.navigate(['/badges'])
    })
  }

}
