import { ImageModule } from 'src/app/models/image/image.module';
import { ImageService } from './../../services/image/image.service';
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-image-ui',
  templateUrl: './image-ui.component.html',
  styleUrls: ['./image-ui.component.scss']
})
export class ImageUIComponent implements OnInit {
    images: ImageModule[]   ;
    empty_list: boolean = true;
    panel : number = 1;
    number_for_edit : number = 0;
  
  constructor(private ImageService: ImageService) {

   }
  ngOnInit(): void {
    this.addImages(null);
  }
  addImages(e): void {
    this.ImageService.list().subscribe(
      res => {
        if(res.length != 0 ){
          console.log(res.length);
          this.images = res;
          this.panel = 3;
        }else  {
          this.panel = 2;
        }
        console.log('panel   '+ this.panel);
      },
      err => {
        console.log(err);
      }
    ) ;
  }
  editFile(e: number): void {// Muestra u oculta la modificacion de imagenes.
    this.panel = 4;
    this.number_for_edit = e;
  }
  updateList(e ): void{// Actualiza la lista de imagenes.
    this.images = this.images.filter(obj => obj !== e);
    if(this.images.length === 0) {
      this.panel = 2;
    }
  }

}
