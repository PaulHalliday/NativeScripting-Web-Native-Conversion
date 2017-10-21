import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GithubService } from './../../../core/services/github.service';
import { User } from '../../../shared/models/user.model';

import 'rxjs/add/observable/of';

@Component({
  moduleId: module.id,
  selector: 'seed-github-search-detail',
  templateUrl: './github-search-detail.component.html',
  styleUrls: ['./github-search-detail.component.scss'],
})
export class GithubSearchDetailComponent implements OnInit {
  userInformation$: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private githubService: GithubService,
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    // this.userInformation$ = Observable.of({
    //   avatar_url: 'https://avatars3.githubusercontent.com/u/19576417?s=460&v=4',
    //   name: 'Paul Halliday',
    //   company: 'PWH',
    //   blog: 'https://blog.paulhalliday.io',
    //   bio: 'Course creator. NativeScript fan!',
    // });

    this.userInformation$ = this.githubService.getUserInformation(id);
  }
}
