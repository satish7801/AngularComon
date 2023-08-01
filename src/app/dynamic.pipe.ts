import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dynamic'
})
export class DynamicPipe implements PipeTransform {

  transform(obj: any, propertyName: string): any {
    return obj[propertyName];
  }

}
