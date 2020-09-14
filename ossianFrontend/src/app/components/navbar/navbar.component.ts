import { ImageService } from './../../services/image/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  value = '';
  constructor( private ImageService:  ImageService) { }

  ngOnInit(): void {
  }

  search(value: string): void {
    this.value = value;
    console.log(this.value);
    this.ImageService.show(this.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }
}
