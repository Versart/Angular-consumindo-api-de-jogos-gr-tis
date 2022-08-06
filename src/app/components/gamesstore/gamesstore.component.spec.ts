import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesstoreComponent } from './gamesstore.component';

describe('GamesstoreComponent', () => {
  let component: GamesstoreComponent;
  let fixture: ComponentFixture<GamesstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesstoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
