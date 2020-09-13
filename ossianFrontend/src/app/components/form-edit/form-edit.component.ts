 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ImageModule } from 'src/app/models/image/image.module';
import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image/image.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss'],
  providers: [ ImageService ]
})
export class FormEditComponent implements OnInit {
  @Input() image : ImageModule;
  form: FormGroup;
  categories: string[]= ['Cities','Nature'];
  id: number = -6;

  constructor(private ImageService: ImageService) { 
  
    this.form = new FormGroup({
      id: new FormControl('-1',),
      url: new FormControl('', [Validators.minLength(0),Validators.required]),
      title: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      category: new FormControl('',Validators.required)
    });
  }
  ngOnInit(): void {
    this.add_info();
  }
  add_info() {
    this.form.patchValue({ id : this.image.id});
    this.form.patchValue({ url : this.image.url});
    this.form.patchValue({ description : this.image.description});
    this.form.patchValue({ category : this.image.category});
    this.form.patchValue({ title : this.image.title});
  }

  OnSubmit() {
    if(this.form.invalid){

    } else {
     // this.image.url = this.form.get('url').value;
     // this.image.title = this.form.get('title').value;
     // this.image.category = this.form.get('category').value;
     // this.image.description = this.form.get('description').value;
     const datos =  {
      'title' : String(this.form.get('title').value),
      'category' : String(this.form.get('category').value),
      'description' : String(this.form.get('description').value),
      'url' : String(this.form.get('url').value),
      'id' : Number(this.form.get('id').value),
     }
     this.ImageService.edit(datos).subscribe(
       res =>{
         console.log(res);
         if( res['status'] === 200 ) {
          this.alertCheck('success', res['state'] );
        } else {
          if( res['status'] === 400 ) {
            this.alertCheck('error', res['state'] );
          }
        }
       }, err => {
            if( err['status'] === 500 ) {
              this.alertCheck('error', err['state'] );
            }
          }
      );
 }


}
  alertCheck( icon , title) {
    Swal.fire({
      icon: icon,
      timer: 1500,
      title: title,
    });
  }
}