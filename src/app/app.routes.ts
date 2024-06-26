import { Routes } from '@angular/router';
import { FicharAsistenciaComponent } from './pages/fichar-asistencia/fichar-asistencia.component';
import { LoginComponent } from './components/login/login.component';
import { PageProyectosComponent } from './pages/page-proyectos/page-proyectos.component';
import { PageOteComponent } from './pages/page-ote/page-ote.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },

    {
        path: 'fichar-asistencia', 
        component: FicharAsistenciaComponent
    },
    {
        path: 'proyectos',
        component: PageProyectosComponent
    },
    {
        path: 'ote',
        component: PageOteComponent
    }
];
