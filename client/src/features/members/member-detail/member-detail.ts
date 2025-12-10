import { Component, inject, OnInit, signal } from '@angular/core';
import { MembersService } from '../../../core/services/members-service';
import { Member } from '../../../types/member';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, NavigationEnd, RouterOutlet } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-member-detail',
  imports: [AsyncPipe, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './member-detail.html',
  styleUrl: './member-detail.css'
})
export class MemberDetail implements OnInit {
  private membersService = inject(MembersService);
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
