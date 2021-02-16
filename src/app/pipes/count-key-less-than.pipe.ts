import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countKeyLessThan'
})
export class CountKeyLessThanPipe implements PipeTransform {

  transform(items: Array<any>, key: string, maxValue: number): number {
    return items && key && maxValue ? items.filter(item => item[key] && item[key] < maxValue).length : 0
  }

}