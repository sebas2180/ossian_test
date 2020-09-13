import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ImageModule { 

  id: number ;
  title: string ;
  description: string ;
  category: string ;
  url: string;

  ImageModule (id, title, description, category, url) {

    this.id = id;
    this.title =  title;
    this.description = description;
    this.category = category;
    this.url = url;
  }
 
  deserialize(input: any): this {
    // Assign input to our object BEFORE deserialize our cars to prevent already deserialized cars from being overwritten.
    return Object.assign(this, input);
  }
}
