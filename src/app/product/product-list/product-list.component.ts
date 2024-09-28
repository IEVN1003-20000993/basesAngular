import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl:'./product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  title="salumo de variables";  

  imageWidth:number=50;
  imageMargi:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:any[]=[

    {
      "ProductoId":1,
      "Modelo": 'DIABLO',
      "Descripcion": "2 Puertas (NO SUBAS GORDAS)",
      "Year":"febrero 3 2022",
      "Precio": 20000000,
      "Marca":"LAMBORGHINI",
      "Color":"AZUL",
      "imagenUrl":"https://i.ebayimg.com/images/g/nbMAAOSwNwJjaGE4/s-l1200.webp"
    },
    {
      "ProductoId":2,
      "Modelo": 'r8',
      "Descripcion": "2 Puertas Y SI TE LOS PREGUNTAS SI CABEN 7U7",
      "Year":"marzo 3 2023",
      "Precio": 30000,
      "Marca":"AUDI",
      "Color":"Blanco",
      "imagenUrl":"https://cdn.motor1.com/images/mgl/W89egj/s3/2023-audi-r8-v10-gt-rwd-exterior.jpg"
      
    },
    {
      "ProductoId":3,
      "Modelo": 'CHIRON',
      "Descripcion": "2 PUERTAS PARA VERTE MAMALON AJAJAJAJAJA",
      "Year":"Agosto 3 2022",
      "Precio": 600000,
      "Marca":"BUGATTI",
      "Color":"BLANCO",
      "imagenUrl":"https://soymotor.com/sites/default/files/2023-07/bugatti-chiron-pur-sport-grand-prix-soymotor.jpg"
      
    }
  ]
}