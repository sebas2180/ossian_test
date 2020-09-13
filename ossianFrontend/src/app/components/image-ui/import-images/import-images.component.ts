import { ImageService } from 'src/app/services/image/image.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-import-images',
  templateUrl: './import-images.component.html',
  styleUrls: ['./import-images.component.scss']
})
export class ImportImagesComponent implements OnInit {
  @Output() addImages : EventEmitter<boolean> = new EventEmitter();
  @Output() emitPanel : EventEmitter<number> = new EventEmitter();
  constructor(private ImageService : ImageService) { }

  ngOnInit(): void {
  }

  import() {
    this.ImageService.import().subscribe(
      response => {
          if(response['status'] === 200 ) {
            Swal.fire({
              icon: 'success',
              timer: 1500,
              title: response['state'],
            });
            this.emitPanel.emit(3);
          }
          this.addImages.emit(null);
      },
      error => {
          Swal.fire({
            icon: 'error',
            timer: 1500,
            title: error['state'],
          });
      }
    );
  }
}
