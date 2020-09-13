import { ImageModule } from 'src/app/models/image/image.module';
import { ImageService } from 'src/app/services/image/image.service';

import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit,OnDestroy {

   viewDates : boolean = false;
  @Input() image : ImageModule;

  @Output() editFile: EventEmitter<Object> = new EventEmitter();
  @Output() updateList = new EventEmitter();
  constructor(private ImageService : ImageService) { }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    console.log('Items destroyed');
  }
  more(){
    if(this.viewDates) {
      this.viewDates = false;
    } else {
      this.viewDates = true;
    }
  }
  edit(){
    this.editFile.emit(this.image.id);
  }
  delete(){
    this.ImageService.delete(this.image.id).subscribe(
      res => {
        if(res['status'] === 200 ) {
          this.alertCheck('success', res['state'] );
        }
      }, err => {
        this.alertCheck('success', err['state'] );
      }
    );
    this.updateList.emit(this.image);
    this.ngOnDestroy();
  }
  alertCheck( icon , title) {
    Swal.fire({
      icon: icon,
      timer: 1500,
      title: title,
    });
  }
}
