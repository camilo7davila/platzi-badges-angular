import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { retry, map } from 'rxjs/operators';

import { User } from '../../../interface/user.interface';
import { BadgesService } from 'src/app/core/services/badges/badges.service';

@Component({
  selector: 'app-badge-screen',
  templateUrl: './badge-screen.component.html',
  styleUrls: ['./badge-screen.component.scss']
})
export class BadgeScreenComponent implements OnInit, OnDestroy {

  user: User = {
    _id: '',
    name: '',
    lastName: '',
    email: '',
    twitter: '',
    job: '',
  }
  isEditing: boolean = false
  isLoading: boolean = true
  id: string = ''

  constructor(
    private route: ActivatedRoute,
    private badgeService: BadgesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (Object.keys(params).length === 0) {
        this.isLoading = false
      } else {
        this.isEditing = true
        this.id = params.id
        this.loadBadge(params.id)
      }
    })
  }

  loadBadge(id): void {
    this.badgeService.getBadgeById(id).pipe(
      map((item) => item.payload),
      retry(2)
    ).subscribe((badge: User) => {
      this.user = badge
      this.isLoading = false;
    })
  }

  handleSaveData(): void {
    if (!this.isEditing) {
      this.badgeService.createBadge(this.user).subscribe(() => this.router.navigate(['/badges']))
    } else {
      const final = {
        name: this.user.name,
        lastName: this.user.lastName,
        email: this.user.email,
        job: this.user.job,
        twitter: this.user.twitter,
      }
      this.badgeService.editBadge(this.id, final).subscribe(() => this.router.navigate(['/badges']))
    }
  }

  handleChangeForm(data: User) {
    this.user = data
  }

  ngOnDestroy(): void {
    this.user = {
      _id: '',
      name: '',
      lastName: '',
      email: '',
      twitter: '',
      job: '',
    }
  }

}
