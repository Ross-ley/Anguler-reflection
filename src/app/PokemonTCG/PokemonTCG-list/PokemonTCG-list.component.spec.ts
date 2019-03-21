import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTCGListComponent } from './PokemonTCG-list.component';

describe('PokemonTCGListComponent', () => {
  let component: PokemonTCGListComponent;
  let fixture: ComponentFixture<PokemonTCGListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonTCGListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTCGListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
