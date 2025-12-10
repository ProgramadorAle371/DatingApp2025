import { Component, inject, OnInit, signal } from '@angular/core';
import { MembersService } from '../../../core/services/members-service';
import { Member } from '../../../types/member';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, NavigationEnd, RouterOutlet } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AgePipe } from '../../../core/pipes/age-pipe';

@Component({
  selector: 'app-member-detail',
  imports: [, RouterLink, RouterLinkActive, RouterOutlet, AgePipe],
  templateUrl: './member-detail.html',
  styleUrl: './member-detail.css'
})
export class MemberDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  protected member = signal<Member | undefined>(undefined);

  ngOnInit(): void {
      this.route.data.subscribe({
          next: data => this.member.set(data["member"])
      });
      this.title.set(this.route.firstChild?.snapshot?.title);

      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe({
        next: () => {
          this.title.set(this.route.firstChild?.snapshot?.title);
        }
      });
    }

}
