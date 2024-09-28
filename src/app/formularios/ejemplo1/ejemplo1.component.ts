import { Component, OnInit } from '@angular/core'; 
import { FormGroup, FormControl, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-ejemplo1', // El selector indica dónde se utilizará este componente en el HTML.
  templateUrl: './ejemplo1.component.html', // Ruta del archivo HTML que se asocia a este componente.
  styleUrls: ['./ejemplo1.component.css'] // Ruta del archivo CSS asociado a este componente.
})
export class Ejemplo1Component implements OnInit { 
  formulario!: FormGroup; // Define un formulario reactivo, que es un grupo de controles de formulario.
  resultado!: number; // Variable que almacenará el resultado de la multiplicación.

  // No es necesario el constructor, ya que no estamos inyectando servicios ni inicializando valores aquí.
  
  ngOnInit(): void { 
    // ngOnInit se ejecuta cuando el componente es inicializado. Aquí definimos los controles del formulario.
    this.formulario = new FormGroup({
      numero1: new FormControl('', Validators.required), // Primer número, es obligatorio (Validators.required).
      numero2: new FormControl('', Validators.required), // Segundo número, también obligatorio.
    });
  }

  // Método que se ejecutará cuando el usuario presione el botón para multiplicar los números.
  multNumeros(): void { 
    // Obtenemos los valores de los controles del formulario (numero1 y numero2).
    let numero1 = this.formulario.get('numero1')?.value; 
    let numero2 = this.formulario.get('numero2')?.value; 

    // Realizamos la multiplicación y almacenamos el resultado en la variable 'resultado'.
    this.resultado = numero1 * numero2; 
  }
}
