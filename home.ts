import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { SWCharacter } from './apiTypes';
import { characterService } from './character.service';

@Component({
    templateUrl: './home.html',
    providers: [characterService]
})

export class HomeComponent {
    chars: Observable<SWCharacter[]>;
    constructor(chs: characterService) {
        this.chars = chs.load$();
    }
}
