import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { QuemSomos } from './pages/quem-somos/quem-somos';
import { Contato } from './pages/contato/contato';
import { Blog } from './pages/blog/blog';
import { Artigo } from './pages/artigo/artigo';
import { Login } from './admin/login/login';
import { Dashboard } from './admin/dashboard/dashboard';
import { EditorPost } from './admin/editor-post/editor-post';

export const routes: Routes = [
  // Rotas Públicas
  { path: '', component: Home },
  { path: 'quem-somos', component: QuemSomos },
  { path: 'contato', component: Contato },
  { path: 'blog', component: Blog },
  { path: 'blog/:id', component: Artigo },

  // Rotas Administrativas
  { path: 'admin', component: Login },
  { path: 'admin/dashboard', component: Dashboard },
  { path: 'admin/editor', component: EditorPost },
  { path: 'admin/editor/:id', component: EditorPost },

  // Rota de fallback
  { path: '**', redirectTo: '' }
];