import { Component, OnInit } from '@angular/core';
import { Igallery } from './models/Igallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public galleryContent : Igallery[];  // ya que será un array de fotos, y el patrón se debe repetir 
  
  constructor() { 

    this.galleryContent = [
      
      {
      title: 'Grúas Torre', 
      img: 'https://www.lavanguardia.com/files/image_449_220/uploads/2019/10/03/5fa5358b55409.jpeg'

    }, 
    {
      title: 'Excavadora', 
      img: 'https://img.interempresas.net/fotos/2210450.jpeg'

    }, 
    {
      title: 'Compactadora', 
      img: 'https://www.disagro.com/sites/default/files/styles/large/public/imagen_producto/disagro-maquinaria_volvo-dd38hf.jpg'

    }, 
  
    {
      title: 'Buldozer', 
      img: 'https://media.istockphoto.com/photos/excavator-working-with-earth-and-sand-in-sandpit-in-highway-picture-id500217175?k=20&m=500217175&s=612x612&w=0&h=3b1Aa57o3nuALtiiQG10A7AqCfk6bboFI7TasQEvqMw='
    }, 
    {
      title: 'Volquete', 
      img: 'https://noticias.coches.com/wp-content/uploads/2017/10/E-dumper-1.jpg'
    }, 
    {
      title: 'Camión', 
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6UZVdUeIoJgQG_BqTVk-aAjvwvOfeeO_1Hg&usqp=CAU'
    }    
]
  }

  ngOnInit(): void {
  }

}
