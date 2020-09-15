import { ImageModule } from 'src/app/models/image/image.module';
import { ImageService } from 'src/app/services/image/image.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ImageAddComponent } from './image-add.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('ImageAddComponent', () => {
  let component: ImageAddComponent;
  let fixture: ComponentFixture<ImageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAddComponent ],
      imports: [
        HttpClientTestingModule,RouterTestingModule
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty',() => {
   
    expect(component.form.valid).toBeFalse();
  });



  it('submitting a form emits a user', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['description'].setValue("Labaru rleo se ase");
    component.form.controls['title'].setValue("Nature");
    component.form.controls['url'].setValue("http://www.org.com");
    component.form.controls['category'].setValue("Real");
    expect(component.form.valid).toBeTruthy();
    let image: ImageModule;
    component.save();
    expect(image.url).toBe("www.org.com");
    expect(image.title).toBe("Nature");
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
