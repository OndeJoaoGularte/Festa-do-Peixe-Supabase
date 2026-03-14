import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  // Controla qual item está em destaque na tela (começa no 0)
  activeIndex = signal(0);

  // Lista de Atividades baseada no documento oficial [cite: 53-64]
  atividades = [
    {
      titulo: 'Feira Gastronômica do Peixe',
      descricao: 'Pratos típicos como tainha, anchova grelhada, caldeirada e outras especialidades da culinária local, promovendo a valorização da gastronomia regional.',
      imagem: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=2070'
    },
    {
      titulo: 'Valorização da Agricultura Local',
      descricao: 'Venda de produtos frescos cultivados na região, integrando produtores locais à feira.',
      imagem: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=2070&auto=format&fit=crop'
    },
    {
      titulo: 'Pescadores em Destaque',
      descricao: 'Homenagens e rodas de conversa com pescadores da região, compartilhando histórias e técnicas tradicionais.',
      imagem: 'https://images.unsplash.com/photo-1534068590799-09895a701e3e?q=80&w=1974&auto=format&fit=crop'
    },
    {
      titulo: 'Oficinas de Culinária',
      descricao: 'Oficinas gratuitas com chefes locais, oferecendo experiências gastronômicas e educativas para todas as idades.',
      imagem: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=2070'
    },
    {
      titulo: 'Shows e Apresentações',
      descricao: 'Bandas locais, fandango, grupos folclóricos e shows nacionais, garantindo a festa de todos.',
      imagem: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop'
    }
  ];

  patrocinadores = [
    { nome: 'Empresa Master', logo: 'assets/images/amazon-logo-png.png', link: '#' },
    { nome: 'Apoiador 1', logo: 'assets/images/ceu.jpg', link: '#' },
    { nome: 'Apoiador 2', logo: 'assets/images/Coca-Cola_logo.png', link: '#' }
  ];

  // Funções para navegar entre as imagens
  nextSlide(): void {
    this.activeIndex.update(i => (i + 1) % this.atividades.length);
  }

  prevSlide(): void {
    this.activeIndex.update(i => (i === 0 ? this.atividades.length - 1 : i - 1));
  }

  selectSlide(index: number): void {
    this.activeIndex.set(index);
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 85; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}