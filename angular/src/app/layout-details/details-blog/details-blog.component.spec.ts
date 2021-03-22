import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBlogComponent } from './details-blog.component';

describe('DetailsBlogComponent', () => {
  let component: DetailsBlogComponent;
  let fixture: ComponentFixture<DetailsBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
