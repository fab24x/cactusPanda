import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRankingComponent } from './tabla-ranking.component';

describe('TablaRankingComponent', () => {
  let component: TablaRankingComponent;
  let fixture: ComponentFixture<TablaRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaRankingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


