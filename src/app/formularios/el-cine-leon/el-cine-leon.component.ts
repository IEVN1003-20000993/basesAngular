import { Component } from '@angular/core';

@Component({
  selector: 'app-el-cine-leon',
  templateUrl: './el-cine-leon.component.html',
  styleUrls: ['./el-cine-leon.component.css'] 
})
export class ElCineLeonComponent {
  nombre: string = '';
  cantidadCompradores: number = 0;
  cantidadBoletos: number = 0;
  tarjetaCineco: string = 'No';
  valorPagar: string = '';
  mensajeDescuento: string = ''; 

  procesar() {
    const precioBoleto = 12.0;
    let total = 0;

    const maxBoletosPorComprador = 7;
    const boletosPermitidos = this.cantidadCompradores * maxBoletosPorComprador;

    if (this.cantidadBoletos > boletosPermitidos) {
      alert(`Verifica el número de boletos, el número máximo es de ${maxBoletosPorComprador} boletos. Vuelve a intentarlo.`);
      return; 
    }

    total = this.cantidadBoletos * precioBoleto;

    if (this.cantidadBoletos >= 5) {
      total *= 0.85; // 15% de descuento
    } else if (this.cantidadBoletos >= 3) {
      total *= 0.9; // 10% de descuento
    }

    if (this.tarjetaCineco === 'Si') {
      total *= 0.9; 
      this.mensajeDescuento = `Eres usuario Cineco, con tu descuento pagarás: $${total.toFixed(2)}`;
    } else {
      this.mensajeDescuento = '';
    }

    this.valorPagar = `$${total.toFixed(2)}`;
  }

  salir(): void {
    window.location.href = 'edge://surf/'; 
  }
}
