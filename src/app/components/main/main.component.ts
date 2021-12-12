import { Component, OnInit } from '@angular/core';
import { Imain } from './models/Imain';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public mainContent : Imain[]; // ya que es un array de objetos 

  constructor() { 

    this.mainContent = [
      
      {
      name: 'Topografía',
      description : 'La topografía es el estudio de la superficie del terreno. En particular, sienta las bases de un paisaje. Por ejemplo, la topografía se refiere a montañas, valles, ríos o cráteres en la superficie. El origen de la topografía proviene de «topo» para «lugar» y «graphia» para «escritura».',
      img: ['https://personal.us.es/leonbo/Imagen/encabezadoA.gif']
    }, 
    {
      name: 'Demolición',
      description : 'Demolición o derribo es lo contrario de construcción: la destrucción de edificios y otras estructuras. El edificio más alto demolido fue el Singer Building, de 47 plantas, en la Ciudad de Nueva York, que fue construido en 1908 y derribado entre 1967 y 1968 para ser reemplazado por el One Liberty Plaza.',
      img: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefaYwVAzUtaWIyUMt9JgvxcG8GS1YA1r5_g&usqp=CAU']
    }, 
    {
      name: 'Grúa Torre',
      description : 'Se denomina grúa torre a un tipo de grúa de estructura metálica desmontable alimentada por corriente eléctrica especialmente diseñada para trabajar como herramienta en la construcción.',
      img: ['https://i1.wp.com/worklift.com.ar/wp-content/uploads/2020/07/ICONOS2_grua-torre.png?fit=417%2C417&ssl=1']
    }, 
    {
      name: 'Pavimentación',
      description : 'La pavimentación de carreteras, calles y caminos es una prioridad hoy en día. Es gracias a esta capa conformada por distintos materiales que permite el paso de vehículos y personas de forma segura. ... Contar con calles y otros espacios pavimentados significa propiciar el desarrollo de las ciudades o poblaciones.',
      img: ['https://www.geoace.com/es/images/960x600/5bc9899acbd22.png']
    }, 

    ]
  }

  ngOnInit(): void {
  }

}
