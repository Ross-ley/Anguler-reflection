import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTGListComponent } from './mtg-list.component';

describe('MTGListComponent', () => {
  let component: MTGListComponent;
  let fixture: ComponentFixture<MTGListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTGListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTGListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
