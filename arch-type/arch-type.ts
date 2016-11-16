import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SWCharacter } from './../apiTypes';

@Component({
    selector: 'arch-type',
    templateUrl: './arch-type/arch-type.html'
})
export class ArchType {
    @Input('archtype') char: SWCharacter;
    @Input('showselect') selectbutton: boolean;

    @Output() selectArchType = new EventEmitter<SWCharacter>();

    setArchType() {
        this.selectArchType.emit(this.char);
    }

    sexClass(x: string): string {
        if (x === 'Female') {
            return 'red lighten-5';
        } else if (x === 'Male') {
            return 'blue lighten-5';
        } else {
            return 'brown lighten-5';
        }
    }
}