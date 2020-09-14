 
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ImageModule } from 'src/app/models/image/image.module';
import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { ImageService } from 'src/app/services/image/image.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.scss'],
  providers: [ ImageService ]
})
export class FormEditComponent implements OnInit{
  @Input() image: ImageModule ;
  @Output() return_page = new EventEmitter();
  form: FormGroup;
  categories: string[] = ['Cities', 'Nature'];
  id: number = -6;
  init_component: boolean = false;
  
  constructor(private ImageService: ImageService) {
    this.image= new ImageModule();
    this.image.category='';
    this.image.id=-1;
    this.image.title='';
    this.image.description='11';
    this.form = new FormGroup({
      id: new FormControl('-1',),
      url: new FormControl('', [Validators.minLength(0), Validators.required]),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    });
  }
  ngOnInit(): void {
    console.log(this.image.description);
    if(this.image){
      this.add_info();
     }
    this.init_component = true;

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
     const datos =  {
      'title' : String(this.form.get('title').value),
      'category' : String(this.form.get('category').value),
      'description' : String(this.form.get('description').value),
      'url' : String(this.form.get('url').value),
      'id' : Number(this.form.get('id').value),
     }
     this.ImageService.edit(datos).subscribe(
       res =>{
        switch (res['status']) {
          case 200:
            this.alertCheck('success', res['state'] );
            this.return_page.emit();
            break;
          case 400:
            this.alertCheck('error', res['state'] );
            break;
          default:
            break;
        }
       }, err => {
        switch (err['status']) {
          case 422:
            const ee = err['error'];
            this.alertCheck('error', ee['errors']['url'][0] );
            break;
          case 500:
            this.alertCheck('error', err['state'] );
            break;
          default:
            break;
        }
          }
      );
        this.return_page.emit();
 }
}

  alertCheck( icon , title): void {
    Swal.fire({
      icon: icon,
      timer: 1500,
      title: title,
    });
  }
  return():void {
    console.log('RETURN');
    this.return_page.emit();
  }
}