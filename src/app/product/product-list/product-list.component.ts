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
      "Modelo": 'Sentra',
      "Descripcion": "4 Puertas Familiar",
      "Year":"febrero 3 2022",
      "Precio": 20000,
      "Marca":"NISSAN",
      "Color":"Morado",
      "imagenUrl":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_4b4578b2047947618873ae0665be3a54.webp"
    },
    {
      "ProductoId":2,
      "Modelo": 'Z360',
      "Descripcion": "2 Puertas",
      "Year":"marzo 3 2023",
      "Precio": 800000,
      "Marca":"NISSAN",
      "Color":"Rojo",
      "imagenUrl":"https://wallup.net/wp-content/uploads/2019/09/61976-cars-nissan-370z.jpg"
      
    },
    {
      "ProductoId":3,
      "Modelo": 'Rio',
      "Descripcion": "4 Puertas Familiar",
      "Year":"Agosto 3 2022",
      "Precio": 60000,
      "Marca":"KIA",
      "Color":"Azul",
      "imagenUrl":"https://www.autoasesor.com/kia/imagenes/riohb2023.png"
      
    }
  ]
}