import { Routes } from '@angular/router';
import { FicharAsistenciaComponent } from './pages/fichar-asistencia/fichar-asistencia.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },

    {
        path: 'fichar-asistencia', 
        component: FicharAsistenciaComponent
    }

];
