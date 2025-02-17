import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionDetailComponent } from './evolution-detail.component';

describe('EvolutionDetailComponent', () => {
  let component: EvolutionDetailComponent;
  let fixture: ComponentFixture<EvolutionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvolutionDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvolutionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
