import { Router } from '@angular/router';
import { ImageService } from 'src/app/services/image/image.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.scss']
})
export class ImageAddComponent implements OnInit {
  categories: string[] = ['Cities', 'Nature'];
  form: FormGroup;
  @Output() return_page = new EventEmitter();

  constructor(private ImageService : ImageService, private router: Router) { 
    this.form = new FormGroup({
      url: new FormControl('', [ Validators.required]),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    });

  }

  ngOnInit(): void {
  }
  save(): void {
    if(this.form.invalid){
      console.log(this.form.get('description').value);
      console.log(this.form.get('title').value);
      console.log(this.form.get('category').value);
      console.log(this.form.get('url').value);
    }else{
      const datos =  {
        'title' : String(this.form.get('title').value),
        'category' : String(this.form.get('category').value),
        'description' : String(this.form.get('description').value),
        'url' : String(this.form.get('url').value)
      }
      console.log('es  valido')
      this.ImageService.add(datos).subscribe(
      res =>{
        switch (res['status']) {
          case 200:
            this.alertCheck('success', res['state'] );
            this.router.navigate(['/list']);
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
              this.return_page.emit();
              break;
            default:
              break;
          }
          }
        );
    }
  }
  alertCheck( icon , title): void {
    Swal.fire({
      icon: icon,
      timer: 1500,
      title: title,
    });
  }
  return(): void {
    this.return_page.emit();
  }

}
