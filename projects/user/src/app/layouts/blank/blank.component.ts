import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBlankComponent } from '../../components/nav-blank/nav-blank.component';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NavBlankComponent],
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent {

}
