import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CaluclatorComponent } from "./caluclator/caluclator.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true, 
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, CaluclatorComponent, FormsModule]
})
export class AppComponent {

}

