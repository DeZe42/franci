import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZsoltiComponent } from './zsolti.component';

describe('ZsoltiComponent', () => {
  let component: ZsoltiComponent;
  let fixture: ComponentFixture<ZsoltiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZsoltiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZsoltiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
