import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { NavBlankComponent } from '../../components/nav-blank/nav-blank.component';
import { NavAuthComponent } from '../../components/nav-auth/nav-auth.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NavAuthComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

}
