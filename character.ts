import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Response } from '@angular/http';

import { Title } from '@angular/platform-browser';
import { SWCharacter } from './apiTypes';
import { characterService } from './character.service';

@Component({
    templateUrl: './character.html',
    providers: [characterService]
})

export class CharacterComponent implements OnInit {
    chars: SWCharacter[];
    archType: SWCharacter;
    t: Title;
    charFormGroup: FormGroup;

    constructor(private fb: FormBuilder,
                chs: characterService,
                private t: Title) {

        const chsObjs = chs.load();
        chsObjs.subscribe((res: Response) => {
            this.chars = res.json();
        });
    }

    ngOnInit() {
        this.charFormGroup = this.fb.group({
            charName: ['', [Validators.minLength(3), Validators.required]],
            charArch: ['', [Validators.minLength(3), Validators.required]]
        });
    }

    onChar(): void {
        console.log('Form Submitted', this.charFormGroup.value);
    }

    setArchType(archType: SWCharacter) {
        this.archType = archType;
        this.t.setTitle('We build ' + archType.name);
    }
}