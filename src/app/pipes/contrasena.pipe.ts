import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: true): string {
    if ( activar ) {
      let salida: string = '';
      for (let index = 0; index < value.length; index++) {
        salida += '*';
      }
      return salida;
    } else {
      return value;
    }
  }

}
