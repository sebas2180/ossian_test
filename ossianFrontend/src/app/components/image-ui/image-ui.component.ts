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
    image_to_edit : ImageModule  =new ImageModule ;
  
  constructor(private ImageService: ImageService) {
   }
  ngOnInit(): void {
    this.addImages();
  }
  addImages(): void {
    this.panel = 1;
    this.images = null;
    console.log('addImages()');
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
  editFile(e: ImageModule): void {// Muestra/oculta la modificacion de imagenes.
    this.image_to_edit = e;
    console.log(this.image_to_edit.category);
    console.log(this.image_to_edit.title);
    console.log(this.image_to_edit.url);
    this.panel = 4;
  }
  updateList(e ): void{// Actualiza la lista de imagenes.
    this.images = this.images.filter(obj => obj !== e);
    if(this.images.length === 0) {
      this.panel = 2;
    }
  }

}
