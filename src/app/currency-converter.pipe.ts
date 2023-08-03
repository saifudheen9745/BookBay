import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {

    return `₹ ${value.split('$')[1]}`
  }

}
