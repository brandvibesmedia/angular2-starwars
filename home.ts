import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { SWCharacter } from './apiTypes';
import { characterService } from './character.service';

@Component({
    templateUrl: './home.html',
    providers: [characterService]
})

export class HomeComponent {
    chars: SWCharacter[];

    constructor(chs: characterService) {
        const chsObjs = chs.load();
        chsObjs.subscribe((res: Response) => {
            this.chars = res.json();
        });
    }
}
