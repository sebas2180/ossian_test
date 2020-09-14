import { ImageModule } from 'src/app/models/image/image.module';
import { ImageService } from 'src/app/services/image/image.service';

import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

   viewDates: boolean = false;
  @Input() image: ImageModule;

  @Output() editFile: EventEmitter<ImageModule> = new EventEmitter();
  @Output() updateList = new EventEmitter();
  constructor(private ImageService : ImageService) { }

  ngOnInit(): void {
  }
 
  more(): void{
    if(this.viewDates) {
      this.viewDates = false;
    } else {
      this.viewDates = true;
    }
  }
  edit(){
    this.editFile.emit(this.image);
  }
  delete(): void{

    Swal.fire({
      title: 'Estas seguro?',
      text: "No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminarlo!'
    }).then((result) => {
      if (result.value) {
        this.ImageService.delete(this.image.id).subscribe(
           err => {
            this.alertCheck('success', err['state'] );
          }
        );
        this.updateList.emit(this.image);
      }
    })

  }
  alertCheck( icon , title): void {
    Swal.fire({
      icon: icon,
      timer: 1500,
      title: title,
    });
  }
}
