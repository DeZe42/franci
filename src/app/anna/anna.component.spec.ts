import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnaComponent } from './anna.component';

describe('AnnaComponent', () => {
  let component: AnnaComponent;
  let fixture: ComponentFixture<AnnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
