import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform{
    transform(value: any, propName: string){
        if(value.length === 0) {
            return value;
        }

        const sortedArray = value.sort((a, b) =>{
            if(a[propName] > b[propName]) {
                return 1;
            }
            if(a[propName] < b[propName]) {
                return -1;
            }
            // name must be equal
            return 0;
        })
        return sortedArray;
    }


}