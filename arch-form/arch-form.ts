import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'arch-form',
    templateUrl: './arch-form/arch-form.html'
})
export class ArchForm {
    charFormGroup: FormGroup;
    @Output() formValid = new EventEmitter<boolean>();

    constructor(private fb: FormBuilder) {
        this.charFormGroup = this.fb.group({
            charName: ['', [Validators.minLength(3), Validators.required]],
            charArch: ['', [Validators.minLength(3), Validators.required]]
        });

        const formChanges: Observable<string> = this.charFormGroup.valueChanges;

        formChanges.subscribe(val => {
            console.log(this.charFormGroup.valid);
            this.formValid.emit(this.charFormGroup.valid);
        });
    }
}