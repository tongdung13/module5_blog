import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPrivateComponent } from './details-private.component';

describe('DetailsPrivateComponent', () => {
  let component: DetailsPrivateComponent;
  let fixture: ComponentFixture<DetailsPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPrivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
