import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUIComponent } from './image-ui.component';

describe('ImageUIComponent', () => {
  let component: ImageUIComponent;
  let fixture: ComponentFixture<ImageUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
