import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WelcomeComponent } from './welcome';
import { HomeComponent } from './home';
import { CharacterComponent } from './character';
import { ArchType } from './arch-type/arch-type';

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'character', component: CharacterComponent}
];

@NgModule({
    declarations: [
        WelcomeComponent,
        HomeComponent,
        CharacterComponent,
        ArchType
    ],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    bootstrap: [WelcomeComponent]
})
export class AppModule {
}