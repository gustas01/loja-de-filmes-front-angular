import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'themeModeIconChange'
})
export class ThemeModeIconChangePipe implements PipeTransform {

  transform(value: boolean ): string {
    switch(value){
      case true:
        return 'wb_sunny';
      case false:
        return 'brightness_3'
    }
    
  }

}
