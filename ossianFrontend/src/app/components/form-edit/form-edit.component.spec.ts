import { ImageModule } from 'src/app/models/image/image.module';
import { FormBuilder } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FormEditComponent } from './form-edit.component';
import { ImageService } from 'src/app/services/image/image.service';

describe('FormEditComponent', () => {
  let component: FormEditComponent;
  let fixture: ComponentFixture<FormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditComponent ],
      imports: [
        HttpClientTestingModule,
      ] ,providers: [
      { provide:  ImageService } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form invalid when empty',() => {
   
    expect(component.form.valid).toBeFalse();
  });

 

  it('submitting a form emits a user', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['description'].setValue("Labaru rleo se ase");
    component.form.controls['title'].setValue("Nature");
    component.form.controls['url'].setValue("www.org.com");
    component.form.controls['category'].setValue("Real");
    expect(component.form.valid).toBeTruthy();
    let image: ImageModule;
    component.OnSubmit();
    expect(image.url).toBe("www.org.com");
    expect(image.title).toBe("Nature");
    expect(image.description).toBe("description");
    expect(image.category).toBe("Ncategoryture");
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
