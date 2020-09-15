import { ImageService } from './../../services/image/image.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  constructor( ) { }
  @Output() filter = new EventEmitter();
  ngOnInit(): void {
  }

  search(value: string): void {
 
    this.filter.emit( value);
  }
}
