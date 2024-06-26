import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { OteComponent } from '../../components/ote/ote.component';

@Component({
  selector: 'app-page-ote',
  standalone: true,
  imports: [HeaderComponent, OteComponent],
  templateUrl: './page-ote.component.html',
  styleUrl: './page-ote.component.css'
})
export class PageOteComponent {

}
