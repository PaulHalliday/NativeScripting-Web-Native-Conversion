import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchDetailComponent } from './github-search-detail.component';

describe('GithubSearchDetailComponent', () => {
  let component: GithubSearchDetailComponent;
  let fixture: ComponentFixture<GithubSearchDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubSearchDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSearchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
