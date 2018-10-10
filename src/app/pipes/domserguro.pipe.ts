import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'domserguro'
})
export class DomserguroPipe implements PipeTransform {

  constructor(private domSanitazer: DomSanitizer) { }
  transform(value: string, url: string): any {
    return this.domSanitazer.bypassSecurityTrustResourceUrl(url + value);
  }

}
