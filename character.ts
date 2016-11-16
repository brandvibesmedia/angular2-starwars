import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Title } from '@angular/platform-browser';
import { SWCharacter } from './apiTypes';
import { characterService } from './character.service';

@Component({
    templateUrl: './character.html',
    providers: [characterService]
})

export class CharacterComponent {
    chars: Observable<SWCharacter[]>;
    archType: SWCharacter;
    t: Title;
    formValid: boolean;

    constructor(chs: characterService,
                private t: Title) {
        this.chars = chs.load$();

    }

    setArchType(archType: SWCharacter) {
        this.archType = archType;
        this.t.setTitle('We build ' + archType.name);
    }
}