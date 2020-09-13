import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportImagesComponent } from './import-images.component';

describe('ImportImagesComponent', () => {
  let component: ImportImagesComponent;
  let fixture: ComponentFixture<ImportImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
