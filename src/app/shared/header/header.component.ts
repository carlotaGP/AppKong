import { Component } from '@angular/core';
import { TokenService } from '../token/token.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  username: string = '';

  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {
    this.username = this.tokenService.getUsername();
  }
}
