import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(items: any[], key: string): any[] {
    return items && items.length ? items.sort((a, b) => a[key] - b[key]) : []
  }

}
