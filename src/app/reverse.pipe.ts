import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform{
    transform(value: any){
        if(value.length > 0) {
            let reverStr = value.split("").reverse().join("");
            return reverStr;
        }
        return value;
    }
}