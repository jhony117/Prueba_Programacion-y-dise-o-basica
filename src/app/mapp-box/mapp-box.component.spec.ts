import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappBoxComponent } from './mapp-box.component';

describe('MappBoxComponent', () => {
  let component: MappBoxComponent;
  let fixture: ComponentFixture<MappBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MappBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MappBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
