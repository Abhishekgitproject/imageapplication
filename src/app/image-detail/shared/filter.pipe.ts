import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'imageFilter'})
export class ImageFilterPipe implements PipeTransform {
    transform(items: any[], criteria: string): any {
        if (criteria === 'all') {
            return items;
        }
        // tslint:disable-next-line:one-line
        else {
          return items.filter(item => {
              return item.category === criteria;
          });
        }
    }
}
