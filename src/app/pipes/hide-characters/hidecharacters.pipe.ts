import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'hidecharacters'
})
export class HideCharactersPipe implements PipeTransform {
    transform(value: any, charlenght: number, symbol: string): any {
        let result = '';
        if (value !== '') {
            let hideChar = '';
            
            for (let i = 0; i < charlenght; i++) {
                let sym = symbol;
                hideChar = hideChar + sym;
            }

            result = hideChar + value.toString().substring(charlenght , value.toString().length);

        }

        return result;
    }
}