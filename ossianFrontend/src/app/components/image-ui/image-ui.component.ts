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
    this.addImages(null);
  }
  addImages(e): void {
    if(e === null || e === undefined || e === '' ){
      this.panel = 3;
      this.images = null;
      this.ImageService.list().subscribe(
        res => {
          if(res.length != 0 ){
            this.images = res;
            console.log( this.images);
            this.panel = 3;
          }else  {
            this.panel = 2;
          }
        },
        err =>{
          console.log(err);
        }
      ) ;
    } else {  // Filtra el array de imagenes
      console.log( 'else');
    let aux: ImageModule[] = [];
    this.images.forEach(element => {
      if(element.title === e){
        aux.push(element);
      }
    });
    this.images = aux;
    }
  }
  editFile(e: ImageModule): void {// Muestra/oculta la modificacion de imagenes.
    this.image_to_edit = e;
    this.panel = 4;
  }
  updateList(e ): void{// Actualiza la lista de imagenes.
    this.images = this.images.filter(obj => obj !== e);
    if(this.images.length === 0) {
      this.panel = 2;
    }
  }

}
