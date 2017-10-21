import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'seed-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.scss'],
})
export class GithubSearchComponent implements OnInit {
  username: string;
  
  constructor() {}

  ngOnInit() {}
}
