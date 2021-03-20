import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogdayComponent } from './blogday.component';

describe('BlogdayComponent', () => {
  let component: BlogdayComponent;
  let fixture: ComponentFixture<BlogdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogdayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
