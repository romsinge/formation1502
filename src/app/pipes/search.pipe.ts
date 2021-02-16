import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], key: string, searchString: string): any[] {
    return items && items.length ? items.filter(item => item[key].toLowerCase().includes(searchString.toLowerCase())) : []
  }

}
