import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsListComponent } from './bugs-list.component';

describe('BugsListComponent', () => {
  let component: BugsListComponent;
  let fixture: ComponentFixture<BugsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
