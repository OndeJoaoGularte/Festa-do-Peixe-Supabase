import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Auth } from '../../services/auth/auth';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isMenuOpen = false; // mantém menu mobile fechado
  isScrolled = false; // mantém barra superior aparecendo

  constructor(
    public authService: Auth,
    private router: Router
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; // barra superior some ao descer 50 pixels
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // alterna estado do menu mobile
  }

  comprarIngresso(): void {
    this.isMenuOpen = false; // fecha menu mobile ao ser clicado

    // Link provisório (você pode alterar para Sympla, Ingresse, etc)
    window.open('https://www.sympla.com.br/', '_blank');
  }

  async onSignOut(): Promise<void> {
    await this.authService.signOut();
    this.router.navigate(['/']);
  }
}