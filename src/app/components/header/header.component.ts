import { Component, OnInit } from '@angular/core';
import { Iheader } from './models/Iheader';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerContent: Iheader; 
  constructor() { 
 
    // siempre le llamo con this 
    this.headerContent = {

      logo: { // ver en interface 
        title: 'Logotipo ', // agrego ésto en caso de que la imagen no cargue para el alt 
        img: 'https://cdn.pixabay.com/photo/2017/06/16/07/27/under-construction-2408066_960_720.png'
      },
      links: ['Movimiento de tierra', 'Grúas', 'Demolición'] // al ser array en html le haré un bucle for
    }
   }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

    }
  

  


