import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogtopComponent } from './blogtop.component';

describe('BlogtopComponent', () => {
  let component: BlogtopComponent;
  let fixture: ComponentFixture<BlogtopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogtopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
